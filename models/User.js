const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // match: [/.+@.+\..+/],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  {
  // toJSON is a mongoose middleware to define how the data is returned
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Increases the friend count in User model object when friends are added by a user
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Initialize the User model with userSchema
const User = model('user', userSchema);


module.exports = User;
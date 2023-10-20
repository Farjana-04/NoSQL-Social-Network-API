// const { Schema, model } = require('mongoose');
// const reactionSchema = require('./Reaction');
// // const dateFormat = require('../utils/date-format');
// const dayjs = require('dayjs')
// const thoughtSchema = new Schema({
//     thoughtText: {
//         type: String,
//         required: true,
//         minlength: 1,
//         maxlength: 280
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//         get: createdAtVal => dayjs(createdAtVal).format('DD/MM/YYYY')
//     },
//     username: {
//         type: String,
//         required: true
//     },
//     reactions: [reactionSchema]
// },

//     {
//         toJSON: {
//             virtuals: true,
//             getters: true
//         },
//         id: false
//     }
// );

// // Create a virtual property `reactionCount` that gets the amount of reations 
// thoughtSchema.virtual('reactionCount').get(function () {
//     return this.reactions.length;
// });
// // // Initialize our Thought model using the ThoughtSchema
// const Thought = model('thought', thoughtSchema);

// module.exports = Thought;
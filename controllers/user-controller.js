// const { User, Thought } = require('../models');

// // /api/users
// module.exports = {
//     //GET all user
//     async getUsers(req, res) {
//       try {
//         const users = await User.find({});
//         res.json(users);
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     },
//     //GET single user
//     async getSingleUser(req, res) {
//       try {
//         const user = await User.findOne({ _id: req.params.userId })
//           .select('-__v');
//           // .populate('thoughts');
//         if (!user) {
//           return res.status(404).json({ message: 'No user with that ID' });
//         }
  
//         res.json(user);
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     },
//     // create a new user
//     async createUser(req, res) {
//       try {
//         const dbUserData = await User.create(req.body);
//         res.json(dbUserData);
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     },
//     //   PUT to update user by _id
//   updateUser({ params, body }, res) {
//     User.findOneAndUpdate({ _id: params.userId }, body, {
//       new: true,
//       runValidators: true,
//     })
//       .then((dbUserData) => {
//         if (!dbUserData) {
//           res.status(404).json({ message: "No user found with this id!" });
//           return;
//         }
//         res.json(dbUserData);
//       })
//       .catch((err) => {
//         res.status(400).json(err);
//       });
//   },

//   // //update a user
//   // updateUser(req, res) {
//   //   User.findOneAndUpdate(
//   //     { _id: req.params.userId },
//   //     { $set: req.body },
//   //     { runValidators: true, new: true }
//   //   )
//   //     .then((user) =>
//   //       !user
//   //         ? res.status(404).json({ message: "No User find with this ID!" })
//   //         : res.json(user)
//   //     )
//   //     .catch((err) => res.status(500).json(err));
//   // },

 
//   //   DELETE to remove user by _id
//   async deleteUser(req, res) {
//     try {
//       const user = await User.findOneAndDelete({ _id: req.params.userId });

//       if (!user) {
//         return res.status(404).json({ message: 'No user with that ID' });
//       }

//       await Thought.deleteMany({ _id: { $in: user.thoughts } });
//       res.json({ message: 'User and associated thoughts deleted!' })
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },

// //   POST to add new friend to user's friend list
// // /api/users/:userid/fiends/:friendId
//    //add a friend
//    addFriend(req, res) {
//     User.findOneAndUpdate(
//       { _id: req.params.userId },
//       { $addToSet: { friends: req.params.friendId } },
//       { runValidators: true, new: true }
//     )
//       .then((user) =>
//         !user
//           ? res.status(404).json({ message: "No User find with this ID!" })
//           : res.json(user)
//       )
//       .catch((err) => res.status(500).json(err));
//   },
//   //delete a friend
//   deleteFriend(req, res) {
//     User.findOneAndUpdate(
//       { _id: req.params.userId },
//       { $pull: { friends: req.params.friendId } },
//       { new: true }
//     )
//       .then(
//         (user) =>
//           !user
//             ? res.status(404).json({ message: "No User find with this ID!" })
//             : res.json(user)
//       )
//       .catch((err) => res.status(500).json(err));
//   },
// };
  
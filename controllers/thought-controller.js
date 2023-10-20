const { Thought, User } = require('../models');

module.exports = {
    //GET all thoughts
    async getThought(req, res) {
        try {
            const thought = await Thought.find();
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //Get single thought
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
                .select('-__v');
            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // create a new thoughts
    async createThought(req, res) {
        try {
            const thoughts = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { thoughts: thoughts._id } },
                { new: true }
            );

            if (!user) {
                return res.status(404).json({
                    message: 'Thought created, but found no user with that ID',
                });
            }

            res.json('Created the thoughts 🎉');
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async updateThought(req, res) {
        try {
            const thoughts = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!thoughts) {
                return res.status(404).json({ message: 'No thoughts with this id!' });
            }

            res.json(thoughts);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async deleteThought(req, res) {
        try {
            const thoughts = await Thought.findOneAndRemove({ _id: req.params.thoughtId });

            if (!thoughts) {
                return res.status(404).json({ message: 'No thought with this id!' });
            }

            const user = await User.findOneAndUpdate(
                { thoughts: req.params.thoughtsId },
                { $pull: { thoughts: req.params.thoughtsId } },
                { new: true }
            );

            if (!user) {
                return res
                    .status(404)
                    .json({ message: 'Thought created but no user with this id!' });
            }

            res.json({ message: 'Thoughts successfully deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
//     //   POST to create reaction
//     addReaction({ params, body }, res) {
//         Thought.findOneAndUpdate(
//             { _id: params.thoughtId },
//             { $push: { reactions: body } },
//             { new: true, runValidators: true }
//         )
//             .then((dbUserData) => {
//                 if (!dbUserData) {
//                     res.status(404).json({ message: "No user found with this id!" });
//                     return;
//                 }
//                 res.json({ message: "reaction created"});
//             })
//             .catch((err) => res.json(err));
//     },
//     // DELETE to pull and remove reaction by reaction's reactionId
//     removeReaction({ params }, res) {
//         Thought.findOneAndUpdate(
//             { _id: params.thoughtId },
//             // remove specific reply from replies array
//             // where replyId matches value of params.replyId passed in from route
//             { $pull: { reactions: { reactionId: params.reactionId } } },
//             { new: true }
//         )
//             .then((dbUserData) => res.json({ message: "reaction removed"}))
//             .catch((err) => res.json(err));
//     },
  };

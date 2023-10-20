const router = require('express').Router();

const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction, 
    removeReaction
} = require('../../controllers/thought-controller');

// Set up Get all and Post at /api/thoughts
router
    .route('/')
    .get(getThought)
    .post(createThought);
    
// Set up Get one, Put, and Delete at /api/thoughts/:id
// /api/thoughts/:thoughtId GET one thought, PUT and DELETE by iD
router
    .route('/:thoughtId')
    .get(getSingleThought) 
    .put(updateThought)
    .delete(deleteThought);
    
 //   /api/thoughts/:thoughtId/reactions
 
router
  .route('/:thoughtId/reactions')
  .post(addReaction);

  router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;
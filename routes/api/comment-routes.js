const router = require('express').Router();

const {
    getAllThoughts,
    addThought,
    getThoughtById,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/comment-controller');

const { route } = require('./user-routes');

// /api/ comments
router.route('/').get(getAllComments);

// /api/comments/userId
router.route('/:userId').post(addComment);

// /api/comments/commentId
router
    .route('/:commentId')
    .get(getThoughtById)
    .put(updateComment)

// /api/comments/userId/commentId
router
    .route('/:userId/:commentId')
    .delete(removeComemnt);

// /api/thoughts/thoughtId/reactions
router
    .route('/:commentId/reactions')
    .post(addReaction);

// /api/thoughtId/reactions/reactionId
router
    .route('/:commentId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;
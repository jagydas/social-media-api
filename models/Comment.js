const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const reactionSchema = require('./Reaction');

// comment schema
const commentSchema = new Schema({
    commentText: {
        type: String,
        required: true,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: true
    },
    // tying reactions to comment
    reactions: [reactionSchema]
}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

// get total count of friends
commentSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// create the comment  model using the CommentSchema
const Comment = model('Comment', commentSchema);

// export the Comment model
module.exports = { Comment };
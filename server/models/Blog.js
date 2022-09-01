const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');

const blogSchema = new Schema(
  {
    blogText: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    comments: [commentSchema],
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    });
    
blogSchema
  .virtual('commentCount')
  .get(function () {
  return this.comments.length;
  });

const blog = model('blog', blogSchema);

module.exports = Blog;
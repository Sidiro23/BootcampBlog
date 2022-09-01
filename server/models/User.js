const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email address!' ]
    },
     password: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    blogs: [{
        type: Schema.Types.ObjectId,
        ref: 'Blog'
      }],
      friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
      }],
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false
    });
    
userSchema
  .virtual('friendCount')
  .get(function () {
  return this.friends.length;
  });

const User = model('user', userSchema);

module.exports = User;
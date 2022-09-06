const { AuthenticationError } = require("apollo-server-express");
const { User, Blog } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("blogs");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("blogs");
    },
    blogs: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Blog.find(params).sort({ createdAt: -1 });
    },
    blog: async (parent, { blogId }) => {
      return Blog.findOne({ _id: blogId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('blogs');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      // First we create the user
      const user = await User.create({ username, email, password });
      // To reduce friction for the user, we immediately sign a JSON Web Token and log the user in after they are created
        const token = signToken(user);
      //   // Return an `Auth` object that consists of the signed token and user's information
        return { token, user };
      // return user;
    },
    login: async (parent, { email, password }) => {
      // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
      const user = await User.findOne({ email });

      // If there is no user with that email address, return an Authentication error stating so
      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
      const correctPw = await user.isCorrectPassword(password);

      // If the password is incorrect, return an Authentication error stating so
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      // If email and password are correct, sign user into the application with a JWT
        const token = signToken(user);

      //   // Return an `Auth` object that consists of the signed token and user's information
        return { token, user };
      // return user;
    },
    addBlog: async (parent, { blogText, blogAuthor }) => {
      const blog = await Blog.create({ blogText, blogAuthor });

      await User.findOneAndUpdate(
        { username: blogAuthor },
        { $addToSet: { blogs: blog._id } }
      );

      return blog;
    },
    addComment: async (parent, { blogId, commentText, commentAuthor }) => {
      return Blog.findOneAndUpdate(
        { _id: blogId },
        {
          $addToSet: { comments: { commentText, commentAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    updateBlog: async (parent, { id, blogText }) => {
      // Find and update the matching class using the destructured args
      return await Blog.findOneAndUpdate(
        { _id: id }, 
        { blogText },
        // Return the newly updated object instead of the original
        { new: true }
      );
    },
    removeBlog: async (parent, { blogId }) => {
      return Blog.findOneAndDelete({ _id: blogId });
    },
    removeComment: async (parent, { blogId, commentId }) => {
      return Blog.findOneAndUpdate(
        { _id: blogId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
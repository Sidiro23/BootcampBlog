const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    blogs: [Blog]!
  }
  type Blog {
    _id: ID
    blogText: String
    blogAuthor: String
    createdAt: String
    comments: [Comment]!
  }
  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String

  type Query {
    users: [User]
    user(username: String!): User
    blogs(username: String): [Blog]
    blog(blogId: ID!): Blog
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!):User
    login(email: String!, password: String!): User
    addBlog(blogText: String!, blogAuthor: String!): Blog
    addComment(
      blogId: ID!
      commentText: String!
      commentAuthor: String!
    ): Blog
    removeBlog(blogId: ID!): Blog
    removeComment(blogId: ID!, commentId: ID!): Blog
  }
`;

module.exports = typeDefs;

// Lines 40 and 41 had Auth at the end.
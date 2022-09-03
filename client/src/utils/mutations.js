import { gql } from '@apollo/client';

// export const LOGIN_USER = gql`
//   mutation login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }
// `;

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    _id
    username
  }
}
`;

// export const ADD_USER = gql`
//   mutation addUser($username: String!, $email: String!, $password: String!) {
//     addUser(username: $username, email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }
// `;

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    _id
    username
  }
}
`;

export const ADD_BLOG = gql`
  mutation addBlog($blogText: String!, $blogAuthor: String!) {
    addBlog(blogText: $blogText, blogAuthor: $blogAuthor) {
      _id
      blogText
      blogAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const UPDATE_BLOG = gql`
mutation UpdateBlog($updateBlogId: ID!, $blogText: String!) {
  updateBlog(id: $updateBlogId, blogText: $blogText) {
    _id
    blogText
  }
}
`;

export const DELETE_BLOG = gql`
mutation RemoveBlog($blogId: ID!) {
  removeBlog(blogId: $blogId) {
    _id
  }
}
`;

export const ADD_COMMENT = gql`
  mutation addComment(
    $blogId: ID!
    $commentText: String!
    $commentAuthor: String!
  ) {
    addComment(
      blogId: $blogId
      commentText: $commentText
      commentAuthor: $commentAuthor
    ) {
      _id
      blogText
      blogAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const REMOVE_COMMENT = gql`
mutation RemoveBlog($blogId: ID!, $commentId: ID!) {
  removeComment(blogId: $blogId, commentId: $commentId) {
    comments {
      _id
    }
  }
}
`;


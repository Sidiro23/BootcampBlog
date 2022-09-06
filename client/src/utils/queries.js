import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      blogs {
        _id
        blogText
        blogAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_USERS = gql`
query Users {
  users {
    _id
    username
    email
    blogs {
      _id
      blogText
      createdAt
    }
  }
}
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      blogs {
        _id
        blogText
        createdAt
      }
    }
  }
`;

export const QUERY_BLOGS = gql`
  query getBlogs {
    blogs {
      _id
      blogText
      blogAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_BLOG = gql`
  query getSingleBlog($blogId: ID!) {
    blog(blogId: $blogId) {
      _id
      blogText
      blogAuthor
      createdAt
      comments {
        _id
        commentAuthor
        commentText
        createdAt
      }
    }
  }
`;

export const QUERY_COMMENTS = gql`
query Blogs {
  blogs {
    comments {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
}
`;

export const QUERY_SINGLE_COMMENT = gql`
query Comments($blogId: ID!) {
  blog(blogId: $blogId) {
    comments {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
}
`;

import React from "react";
import { gql, useQuery } from "@apollo/client";

export const QUERY_USERS = gql`
  query Users {
    users {
      _id
      username
      email
      blogs {
        blogText
      }
    }
  }
`;

export default function Dashboard() {
  const { data, loading, error } = useQuery(QUERY_USERS);
  console.log(data);
  console.log(loading);
  console.log(error);
  return (
    <div>
      <div class="wrap card">
        <div className="card-header"> Search for post</div>
        <div className="search card-body">
          <div class="input-group mb-3">
            <button class="btn btn-outline-secondary" type="button">
              Button
            </button>
            <input
              type="text"
              className="form-control"
              placeholder="Which post are you looking for?"
            />
          </div>
        </div>
      </div>

      <div className="wrap card">
        <h3 className="card-header">Show all post</h3>
        <button className="btn btn-primary">Find All</button>
      </div>
    </div>
  );
}

// import {UPDATE_BLOG, DELETE_BLOG} from '../../utils/mutations';
// import { QUERY_BLOGS, QUERY_SINGLE_BLOG } from '../../utils/queries';
// import { useMutation } from '@apollo/client';

// export default function DashBoard() {
//   const [formState, setFormSate]= useState({
//     blogText: '',
//   });
//   const updateBlog = useMutation(UPDATE_BLOG);
//   const deleteBlog = useMutation(DELETE_BLOG);
//   const allBlogs = useMutation(QUERY_BLOGS);
//   const findBlog = useMutation(QUERY_SINGLE_BLOG);
// ;

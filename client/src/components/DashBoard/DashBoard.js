import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import "./dashboard.css";

import BlogListUser from "../BlogListUser/index";

import { QUERY_ME } from "../../utils/queries";

import Auth from "../../utils/auth";

const DashBoard = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_ME);

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  //   if (Auth.loggedIn() && Auth.getProfile().data.username) {
  // return <Navigate to="/me" />;
  //   }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Auth.loggedIn()) {
    return (
      <div>
        <h4>
          You need to be logged in to see this. Use the navigation links above
          to sign up or log in!
        </h4>
      </div>
    );
  }
  console.log(data);
  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <div className="userSignedIn">
          <h2>Viewing {userParam ? `${user.username}'s` : "your"} profile.</h2>
        </div>

        <div className="blogListUser">
          <BlogListUser
            blogs={user.blogs}
            title={`${user.username}'s blogs...`}
            showTitle={false}
            showUsername={false}
          />
        </div>
        {/* {!userParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}
          >
            <ThoughtForm />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default DashBoard;

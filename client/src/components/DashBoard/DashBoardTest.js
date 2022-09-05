import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../../utils/queries';
import BlogListUser from "../BlogListUser/index";

export default function Homepage() {
  const { data } = useQuery(QUERY_USERS);
  const users = data?.users || [];

  return (
    <div className="container-home">
      <BlogListUser
      users={users}
      title="" 
      />
    </div>
  );
}
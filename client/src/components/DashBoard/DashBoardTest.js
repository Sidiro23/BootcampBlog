import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_BLOGS } from '../../utils/queries';
import BlogListUser from "../BlogListUser/index";

export default function Homepage() {
  const { data } = useQuery(QUERY_BLOGS);
  const blogs = data?.blogs || [];

  return (
    <div className="container-home">
      <BlogListUser
      blogs={blogs}
      title="" 
      />
    </div>
  );
}
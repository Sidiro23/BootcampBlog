import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_BLOGS } from "../../utils/queries";
import BlogList from "../BlogList/index";
import Auth from "../../utils/auth";

export default function Homepage() {
  const { data } = useQuery(QUERY_BLOGS);
  const blogs = data?.blogs || [];

  return (
    <div className="container-home">
      <BlogList blogs={blogs} title="" />
    </div>
  );
}

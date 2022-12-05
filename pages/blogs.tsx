import { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";

interface Props {}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/posts").then((data) =>
    data.json()
  );
  return {
    props: { posts: res.postInfo },
  };
};

const Blogs: NextPage<Props> = ({ posts }) => {
  return (
    <div className="max-w-3xl mx-auto p-5">
      {posts.map((post) => (
        <BlogCard title={post.title} description={post.meta} />
      ))}
    </div>
  );
};

export default Blogs;

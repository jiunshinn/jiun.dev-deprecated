import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface Props {}

const SinglePost: NextPage<Props> = (props) => {
  return (
    <div>
      <h1>{props.post.title}</h1>
      <h1>{props.post.content}</h1>
    </div>
  );
};

export const getStaticProps: GetStaticProps = (context) => {
  const { params } = context;
  const { postSlug } = params as any;
  const filePathToRead = path.join(process.cwd(), "/posts/" + postSlug + ".md");
  const fileContents = fs.readFileSync(filePathToRead, "utf8");
  const { content, data } = matter(fileContents);
  return {
    props: {
      post: {
        content,
        title: data.title,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const dirPathToRead = path.join(process.cwd(), "posts");
  const dirs = fs.readdirSync(dirPathToRead);
  const paths = dirs.map((filename) => {
    const filePathToRead = path.join(process.cwd(), "/posts/" + filename);
    const fileContents = fs.readFileSync(filePathToRead, "utf8");
    return { params: { postSlug: matter(fileContents).data.slug } };
  });
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
};

export default SinglePost;

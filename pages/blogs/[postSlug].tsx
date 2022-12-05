import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ParsedUrlQuery } from "querystring";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const SinglePost: NextPage<Props> = (props) => {
  return (
    <div>
      <h1>{props.post.title}</h1>
      <h1>{props.post.content}</h1>
    </div>
  );
};

interface IStaticProps extends ParsedUrlQuery {
  postSlug: string;
}

type Post = {
  post: {
    title: string;
    content: string;
  };
};

export const getStaticProps: GetStaticProps<Post> = (context) => {
  const { params } = context;
  const { postSlug } = params as IStaticProps;
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

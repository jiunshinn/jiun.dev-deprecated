import { InferGetStaticPropsType, NextPage } from "next";
import BlogCard from "../../components/BlogCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { readPostsInfo } from "../../lib/helper";

type PostApiResponse = {
  title: string;
  slug: string;
  meta: string;
  date: Date;
}[];

export const getStaticProps = async () => {
  const postInfo: PostApiResponse = readPostsInfo();

  return {
    props: { posts: postInfo },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Blogs: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <Header />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                description={post.meta}
                slug={post.slug}
                date={post.date}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blogs;

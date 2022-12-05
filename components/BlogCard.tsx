import Link from "next/link";

interface Props {
  title: string;
  description: string;
  slug: string;
}

const BlogCard = ({ title, description, slug }: Props) => {
  return (
    <Link href={"/blogs/" + slug}>
      <div className="bg-green-100 p-2 rounded cursor-pointer">
        <h1 className="text-grey-900 text-3xl font-bold">{title}</h1>
        <p className="text-grey-500">{description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;

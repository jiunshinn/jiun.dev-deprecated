interface Props {
  title: string;
  description: string;
}

const BlogCard = ({ title, description }: Props) => {
  return (
    <div className="bg-green-100 p-2 rounded">
      <h1 className="text-grey-900 text-3xl font-bold">{title}</h1>
      <p className="text-grey-500">{description}</p>
    </div>
  );
};

export default BlogCard;

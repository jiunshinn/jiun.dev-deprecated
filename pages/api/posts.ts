import { NextApiHandler } from "next";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const handler: NextApiHandler = (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET": {
      const data = readPostsInfo();
      return res.json({ postInfo: data });
    }
  }
};

const readPostsInfo = () => {
  const dirPathToRead = path.join(process.cwd(), "posts");
  const dirs = fs.readdirSync(dirPathToRead);
  const data = dirs.map((filename) => {
    const filePathToRead = path.join(process.cwd(), "/posts/" + filename);
    const fileContents = fs.readFileSync(filePathToRead, "utf8");
    return matter(fileContents).data;
  });
  return data;
};

export default handler;

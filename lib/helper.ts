import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { PostApiResponse } from "../utils/types";

export const readPostsInfo = (): PostApiResponse => {
  const dirPathToRead = path.join(process.cwd(), "posts");
  const dirs = fs.readdirSync(dirPathToRead);
  const data = dirs.map((filename) => {
    const filePathToRead = path.join(process.cwd(), "/posts/" + filename);
    const fileContents = fs.readFileSync(filePathToRead, "utf8");
    return matter(fileContents).data;
  });
  return data as PostApiResponse;
};

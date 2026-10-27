export const dynamic = 'force-static';
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "db", "posts.json");
  const fileData = await fs.readFile(filePath, "utf8");
  const posts = JSON.parse(fileData);
  return Response.json(posts);
}

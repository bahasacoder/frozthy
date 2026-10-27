export const dynamic = 'force-static';
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() { 
  // https://raw.githubusercontent.com/bahasacoder/step-cart/main/db/todays.json`
  const filePath = path.join(process.cwd(), "db", "todays.json");
  const fileData = await fs.readFile(filePath, "utf8");
  const itemsTodays = JSON.parse(fileData);
  return Response.json(itemsTodays);  
}

export async function POST(request: Request) {
  const newItemToday = await request.json();
  const filePath = path.join(process.cwd(), "db", "todays.json");
  const fileData = await fs.readFile(filePath, "utf8");
  const itemsTodays = JSON.parse(fileData);
  newItemToday.id = itemsTodays.length + 1;
  itemsTodays.push(newItemToday);
  await fs.writeFile(filePath, JSON.stringify(itemsTodays, null, 2));
  return Response.json({ message: "Item today's created", itemToday: newItemToday });
}


  

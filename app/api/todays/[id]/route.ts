export const dynamic = 'force-static';
import { NextResponse, NextRequest } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { any, array } from "zod";
import { it, tr } from "zod/v4/locales";
import { request } from "https";


interface ItemsTodays {
  nama: string;
  harga: string;  
  kategori: string;
  deskripsi: string;
  lokasi: string;
  gambar1: string;  
  gambar2: string;
  gambar3: string;
  map: string;
  penjual: string;
  kontak: string;
  alamat: string;
  id: string;
}


type Params = {
  id: string;
};

export async function generateStaticParams() {
  // You can also fetch these from a database or API
    const filePath = path.join(process.cwd(), "db", "todays.json");  
    const fileData = await fs.readFile(filePath, "utf8");
    const itemsTodays: ItemsTodays[] = JSON.parse(fileData);
  
  return itemsTodays.map((item) => ({
    id: item.id.toString(),
  }));
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }>}
  ) { 
   try {    
   const { id } = await params
    const filePath = path.join(process.cwd(), "db", "todays.json");  
    const fileData = await fs.readFile(filePath, "utf8");
    const itemsTodays: ItemsTodays[] = JSON.parse(fileData);
    const itemToday = itemsTodays.find((item: any) => item.id === Number(id));

    if (!itemToday) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }
    return NextResponse.json(itemToday);
  } catch (error) {
    console.error("Error fetching item:", error);
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }
}


// PUT from users learn-json
export async function PUT2(request: NextRequest, { params }: { params: { id: string } }) {
  return NextResponse.json({ message: "Barang updated" });
  /*
  const updatedBarang = await request.json();
  const { id } = params;
  console.log("PUT request received for Barang ID:", id);
  console.log("Updateuser Id:", updatedBarang);
  return NextResponse.json({ message: "User updated" });
  */
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }>}) {
  // const { id } = params;
  const { id } = await params
  const body = await request.json();
  const {  nama, harga, kategori, deskripsi, lokasi, map, gambar1, gambar2, gambar3, penjual, kontak, alamat } = body;
  
  console.log("PATCH/PUT request received for Barang ID:", id);
  console.log("UpdateBarang Id:", nama);
  const filePath = path.join(process.cwd(), "db", "todays.json");
  const fileData = await fs.readFile(filePath, "utf8");
  const itemsData: ItemsTodays[] = JSON.parse(fileData);
  const targetId = id;
  const updates = body; // Assuming body contains the fields to update, e.g., { nama: "New Name", harga: "New Price" }
  // Find index of the object with matching id
  const index = itemsData.findIndex((item: any) => item.id === parseInt(targetId));
  console.log("Index of item to update:", index);
  if (index !== -1) {
    // Update only specific fields
    Object.assign(itemsData[index], updates);
  } else {
    console.log(`Item with id ${targetId} not found.`);
  }
  console.log("items array after update attempt:", itemsData);  
  await fs.writeFile(filePath, JSON.stringify(itemsData, null, 2));
  return NextResponse.json({ message: "Barang updated", itemsData: itemsData[index]});

/*
  const filePath = path.join(process.cwd(), "data", "users.json");
  const fileData = await fs.readFile(filePath, "utf8");
  let users = JSON.parse(fileData);
  //console.log("users from jsonfile:", users);
  // bagaimana memasukkan updatedUser ke dalam users array dengan id yang sama?  
  /* users = users.map((user: any) => (user.id === updatedUser.id ? updatedUser : user)); 
  */
 /*
  const targetId = id;
  const updates = { name: nameUpdated, email: emailUpdated };
  // Find index of the object with matching id
  const index = users.findIndex((user: any) => user.id === parseInt(targetId));
  console.log("Index of user to update:", index);
  if (index !== -1) {
    // Update only specific fields
    Object.assign(users[index], updates);
  } else {
    console.log(`User with id ${targetId} not found.`);
  }
  console.log("users array after update attempt:", users);

  console.log("updatedUser object:", updatedUser);
  await fs.writeFile(filePath, JSON.stringify(users, null, 2));
  return NextResponse.json({ message: "User updated", user: updatedUser });
*/  
} 

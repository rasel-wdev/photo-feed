import { getAllPhotoData } from "@/lib/image-data";
import { NextResponse } from "next/server";

export async function GET() {
  // const data = await getAllPhoto();

  const data = await getAllPhotoData();
  return NextResponse.json(data);
}

import { db } from "@/libs/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const tags = await db.tag.findMany();
    return NextResponse.json(tags, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Tags could not be fetched" },
      { status: 500 }
    );
  }
};

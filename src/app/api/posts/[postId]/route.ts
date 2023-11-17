import { db } from "@/libs/connect";
import { NextResponse } from "next/server";

interface IContextProps {
  params: {
    postId: string;
  };
}

export const DELETE = async (req: Request, context: IContextProps) => {
  try {
    const { params } = context;
    await db.post.delete({
      where: {
        id: params.postId,
      },
    });
    return new Response(null, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { message: "Post could not be deleted!" },
      { status: 500 }
    );
  }
};

export const PATCH = async (req: Request, context: IContextProps) => {
  try {
    const body = await req.json();
    const { params } = context;
    await db.post.update({
      where: {
        id: params.postId,
      },
      data: {
        title: body.title,
        content: body.content,
        tagId: body.tagId,
      },
    });
    return NextResponse.json(
      { message: "Post updated successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Post could not be updated!" },
      { status: 500 }
    );
  }
};

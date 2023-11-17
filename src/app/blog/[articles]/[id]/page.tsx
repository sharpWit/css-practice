import ButtonAction from "@/components/buttons/ButtonAction";
import { db } from "@/libs/connect";
import { NextPage } from "next";
import React from "react";

interface IPostIdProps {
  params: {
    id: string;
  };
}

const getData = async (id: string) => {
  const res = await db.post.findFirst({
    where: { id: id },
    select: {
      id: true,
      title: true,
      content: true,
      tags: true,
    },
  });
  return res;
};

const postId: NextPage<IPostIdProps> = async ({ params }) => {
  const post = await getData(params.id);

  return (
    <section className="max-w-6xl mt-4 mx-auto">
      <div className="flex flex-col space-y-4">
        <h2 className="text-2xl font-bold text-primary-content my-4">
          {post?.title}
        </h2>
        <p className="text-neutral">{post?.content}</p>
        <ButtonAction id={params.id} />
      </div>
    </section>
  );
};

export default postId;

import ButtonAction from "@/components/buttons/ButtonAction";
import React from "react";

const postId = () => {
  return (
    <section className="max-w-6xl mt-4 mx-auto">
      <div className="flex flex-col space-y-4">
        <h2 className="text-2xl font-bold text-primary-content my-4">
          Post One
        </h2>
        <p className="text-neutral">Post Content</p>
        <ButtonAction />
      </div>
    </section>
  );
};

export default postId;

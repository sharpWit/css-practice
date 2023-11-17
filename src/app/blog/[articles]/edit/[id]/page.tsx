"use client";

import FormPost from "@/components/forms/FormPost";
import { TFormInputPost } from "@/types";
import { SubmitHandler } from "react-hook-form";

const editPost = () => {
  const handleEditPost: SubmitHandler<TFormInputPost> = (data) => {
    console.log(data);
  };
  return (
    <section className="mt-6">
      <h1 className="text-lg md:text-2xl font-bold text-primary-content text-center">
        Edit Post
      </h1>
      <FormPost submit={handleEditPost} isEditing />
    </section>
  );
};

export default editPost;

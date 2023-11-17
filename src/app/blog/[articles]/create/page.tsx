"use client";

import FormPost from "@/components/forms/FormPost";
import { TFormInputPost } from "@/types";
import { SubmitHandler } from "react-hook-form";

const createPost = () => {
  const handleCreatePost: SubmitHandler<TFormInputPost> = (data) => {
    console.log(data);
  };
  return (
    <section className="mt-6">
      <h1 className="text-lg md:text-2xl font-bold text-primary-content text-center">
        Add Post
      </h1>
      <FormPost submit={handleCreatePost} isEditing={false} />
    </section>
  );
};

export default createPost;

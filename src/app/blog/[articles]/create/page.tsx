"use client";

import FormPost from "@/components/forms/FormPost";
import { TFormInputPost } from "@/types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

const CreatePost = () => {
  const router = useRouter();
  const handleCreatePost: SubmitHandler<TFormInputPost> = (data) => {
    createPost(data);
  };

  const { mutate: createPost, isSuccess } = useMutation({
    mutationFn: (newPost: TFormInputPost) => {
      return axios.post("/api/posts/create", newPost);
    },
    onError: (err) => {
      console.error(err);
    },
    onSuccess: () => {
      router.push("/blog");
      router.refresh();
    },
  });
  return (
    <section className="mt-6">
      <h1 className="text-lg md:text-2xl font-bold text-primary-content text-center">
        Add Post
      </h1>
      <FormPost submit={handleCreatePost} isEditing={false} />
    </section>
  );
};

export default CreatePost;

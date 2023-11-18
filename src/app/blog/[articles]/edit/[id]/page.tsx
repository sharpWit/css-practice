"use client";

import FormPost from "@/components/forms/FormPost";
import { TFormInputPost, TPostData } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FC } from "react";
import { SubmitHandler } from "react-hook-form";
import Loading from "./loading";
import { useRouter } from "next/navigation";

interface IEditPostProps {
  params: {
    id: string;
  };
}

const EditPost: FC<IEditPostProps> = ({ params }) => {
  const router = useRouter();
  const { id } = params;
  const { data: postData, isLoading } = useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const res: TPostData = await axios.get(`/api/posts/${id}`);
      return res.data;
    },
  });

  const { mutate: updatePost, isSuccess: isSuccessEdit } = useMutation({
    mutationFn: async (newPost: TFormInputPost) => {
      return axios.patch(`/api/posts/${id}`, newPost);
    },
    onError: (err) => {
      console.error(err);
    },
    onSuccess: () => {
      router.push("/blog");
      router.refresh();
    },
  });

  const handleEditPost: SubmitHandler<TFormInputPost> = (data) => {
    updatePost(data);
  };

  if (isLoading) return <Loading />;
  return (
    <section className="mt-6">
      <h1 className="text-lg md:text-2xl font-bold text-primary-content text-center">
        Edit Post
      </h1>
      <FormPost
        submit={handleEditPost}
        isSuccessEdit={isSuccessEdit}
        isSuccessCreate={false}
        initialValue={postData}
        isEditing
      />
    </section>
  );
};

export default EditPost;

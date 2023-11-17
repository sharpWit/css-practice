"use client";

import Loading from "@/app/loading";
import { TFormInputPost } from "@/types";
import { Tag } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormPostProps {
  submit: SubmitHandler<TFormInputPost>;
  isEditing: boolean;
}

const FormPost: FC<IFormPostProps> = ({ submit, isEditing }) => {
  const { register, handleSubmit } = useForm<TFormInputPost>();

  // Fetch tag lists
  const { data: tagsData, isLoading: isLoadingTags } = useQuery<Tag[]>({
    queryKey: ["tags"],
    queryFn: async () => {
      try {
        const res = await axios.get("/api/tags");
        return res.data;
      } catch (error) {
        throw error;
      }
    },
  });

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col items-center justify-center gap-2 mt-4"
    >
      <input
        {...register("title", { required: true })}
        type="text"
        placeholder="Post title..."
        className="input input-bordered input-primary text-primary w-full max-w-lg"
      />
      <textarea
        {...register("content", { required: true })}
        className="textarea textarea-primary text-primary w-full max-w-lg"
        placeholder="Content..."
      ></textarea>
      {isLoadingTags ? (
        <Loading />
      ) : (
        <select
          {...register("tag", { required: true })}
          className="select select-primary text-primary w-full max-w-lg"
          defaultValue="JavaScript"
        >
          <option disabled value="">
            Select tags
          </option>
          {tagsData?.map((tag) => (
            <option value={tag.id} key={tag.id}>
              {tag.name}
            </option>
          ))}
        </select>
      )}

      <button
        type="submit"
        className="btn btn-primary text-primary-content w-full max-w-lg"
      >
        {isEditing ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default FormPost;

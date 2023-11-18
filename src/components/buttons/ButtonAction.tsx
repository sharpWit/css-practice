"use client";

import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { FC } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";

interface IButtonActionProps {
  id: string;
}

const ButtonAction: FC<IButtonActionProps> = ({ id }) => {
  const router = useRouter();
  const { mutate: deletePost, isSuccess: isSuccessDelete } = useMutation({
    mutationFn: async () => {
      return axios.delete(`/api/posts/${id}`);
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
    <div className="flex items-center gap-2">
      <Link
        href={`/blog/articles/edit/${id}`}
        className="flex items-center gap-2 text-primary-content btn btn-outline"
      >
        <Pencil />
        Edit
      </Link>
      <button
        onClick={() => deletePost()}
        className="flex items-center gap-2 btn btn-error"
      >
        {isSuccessDelete ? (
          <Loading />
        ) : (
          <>
            <Trash2 /> Delete
          </>
        )}
      </button>
    </div>
  );
};

export default ButtonAction;

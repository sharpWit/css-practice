import { FC } from "react";
import Link from "next/link";
import { Tag } from "@prisma/client";

interface IPostsProps {
  post: {
    id: string;
    title: string;
    content: string;
    tags: Tag;
  };
}

const PostCard: FC<IPostsProps> = ({ post }) => {
  const { id, title, content, tags } = post;

  return (
    <div className="card w-full bg-base-content text-primary-content border shadow-md">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content.slice(0, 99)}</p>
        <div className="badge badge-primary">{tags.name}</div>
        <div className="card-actions justify-end">
          <Link href={`/blog/articles/${id}`} className="hover:underline">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

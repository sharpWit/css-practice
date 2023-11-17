import Link from "next/link";

const PostCard = () => {
  return (
    <div className="card w-full bg-base-content text-primary-content border shadow-md">
      <div className="card-body">
        <h2 className="card-title">Post title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link href="/blog/articles/1" className="hover:underline">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

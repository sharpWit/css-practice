import PostCard from "@/components/cards/post-card/PostCard";
import { db } from "@/libs/connect";

const getPosts = async () => {
  const res = await db.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      tags: true,
    },
    orderBy: {
      createAt: "desc",
    },
  });
  return res;
};

const Posts = async () => {
  const posts = await getPosts();

  return (
    <div className="self-center grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;

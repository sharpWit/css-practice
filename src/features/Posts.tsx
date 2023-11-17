import PostCard from "@/components/cards/post-card/PostCard";

const Posts = () => {
  return (
    <div className="self-center grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default Posts;

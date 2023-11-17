import { db } from "@/libs/connect";
import Link from "next/link";

const getPosts = async () => {
  const res = await db.post.findMany();
  return res;
};

const blogPage = async () => {
  const posts = await getPosts();
  return (
    <section>
      {posts?.map((post) => (
        <article key={post.id}>
          <h2 className="text-lg font-bold ">{post.title}</h2>
          <p className="p-2">{post.content}</p>
        </article>
      ))}
    </section>
  );
};

export default blogPage;

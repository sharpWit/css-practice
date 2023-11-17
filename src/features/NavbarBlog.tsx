import BackButton from "@/components/buttons/BackButton";
import Link from "next/link";
import React from "react";

const NavbarBlog = () => {
  return (
    <nav className="flex items-center justify-between gap-2">
      <BackButton />
      <Link href="/blog/articles">
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full h-full p-1">
          Manage posts
        </button>
      </Link>
      <Link href="/blog/articles/create">
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full h-full p-1">
          Create a post
        </button>
      </Link>
    </nav>
  );
};

export default NavbarBlog;

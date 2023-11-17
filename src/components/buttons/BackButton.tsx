"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline text-secondary-content"
      onClick={() => router.back()}
    >
      <ChevronLeft className="text-secondary-content" />
      Go back
    </button>
  );
};

export default BackButton;

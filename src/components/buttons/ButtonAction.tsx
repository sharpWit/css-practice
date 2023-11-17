import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";

const ButtonAction = () => {
  return (
    <div className="flex items-center gap-2">
      <Link
        href="/blog/articles/edit/1"
        className="flex items-center gap-2 text-primary-content btn btn-outline"
      >
        <Pencil />
        Edit
      </Link>
      <button className="flex items-center gap-2 btn btn-error">
        <Trash2 /> Delete
      </button>
    </div>
  );
};

export default ButtonAction;

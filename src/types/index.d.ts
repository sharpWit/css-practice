import { Tag } from "@prisma/client";

export type TFormInputPost = {
  title: string;
  content: string;
  tagId: string;
};

export type TPostData = {
  data: {
    id: string;
    title: string;
    content: string;
    createAt: Date;
    updateAt: Date;
    tagId: string;
    tags: Tag;
  };
};

import type { Post } from "@/entities/post/model/types";

type FilterByLengthParams = {
  posts: Post[];
  min?: number;
  max?: number;
};

export const filterByLength = ({ posts, min, max }: FilterByLengthParams) =>
  posts.filter((post) => {
    const length = post.title.length;
    const meetsMin = min === undefined || length >= min;
    const meetsMax = max === undefined || length <= max;
    return meetsMin && meetsMax;
  });

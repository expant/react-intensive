import type { Post } from "@/entities/post/model/types";

export const filterByLength = (posts: Post[], min?: number, max?: number) =>
  posts.filter((post) => {
    const length = post.title.length;
    const meetsMin = min === undefined || length >= min;
    const meetsMax = max === undefined || length <= max;
    return meetsMin && meetsMax;
  });

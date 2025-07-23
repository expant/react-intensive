type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  author: string;
};

export const filterByLength = (posts: Post[], min?: number, max?: number) =>
  posts.filter((post) => {
    const length = post.title.length;
    const meetsMin = min === undefined || length >= min;
    const meetsMax = max === undefined || length <= max;
    return meetsMin && meetsMax;
  });

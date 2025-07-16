type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  author: string;
};

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

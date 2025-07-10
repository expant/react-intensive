type Post = {
  id: number;
  title: string;
  body: string;
};

type FilterByLengthParams = {
  posts: Post[];
  min: number;
  max: number;
};

export const filterByLength = ({ posts, min, max }: FilterByLengthParams) =>
  posts.filter((post) => {
    const length = post.title.length;
    return length >= min && length <= max;
  });

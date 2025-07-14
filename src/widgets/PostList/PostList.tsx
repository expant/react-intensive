import { useState, useEffect } from "react";
import { PostListContentWithLoading } from "./PostListContent";
import { PostLengthFilter } from "@/features/PostLengthFilter/ui/PostLengthFilter";
import type { LengthFilter } from "@/features/PostLengthFilter/types";

export function PostList() {
  const [lengthPostTitle, setLengthPostTitle] = useState<LengthFilter>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PostLengthFilter
        length={lengthPostTitle}
        onChange={setLengthPostTitle}
      />
      <PostListContentWithLoading loading={loading} props={lengthPostTitle} />
    </>
  );
}

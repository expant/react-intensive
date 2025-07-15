import { useState, useEffect } from "react";
import { PostListContentWithLoading } from "./PostListContent";
import { PostLengthFilter } from "@/features/PostLengthFilter/ui/PostLengthFilter";
import type { LengthFilter } from "@/features/PostLengthFilter/types";

export function PostList() {
  const [lengthPostTitle, setLengthPostTitle] = useState<LengthFilter>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [lengthPostTitle]);

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

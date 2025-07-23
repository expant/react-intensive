export type Comment = {
  id: number;
  name: string;
  body: string;
};

export type CommentCardProps = {
  comment: Comment;
};

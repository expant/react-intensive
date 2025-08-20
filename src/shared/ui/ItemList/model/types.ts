import type { ReactNode } from "react";

export type ItemListProps<T> = {
  items: T[];
  listClassName?: string;
  listItemClassName?: string;
  children: (item: T) => ReactNode;
};

import type { ItemListProps } from "./model/types";

export function ItemList<T extends { id: number }>(props: ItemListProps<T>) {
  const { items, listClassName, listItemClassName, children } = props;

  return (
    <ul className={listClassName}>
      {items.map((item) => (
        <li key={item.id} className={listItemClassName}>
          {children(item)}
        </li>
      ))}
    </ul>
  );
}

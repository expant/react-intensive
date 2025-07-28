import type { TodoProps } from "../model/types";
import styles from "./Todo.module.css";

export function Todo({ todo }: TodoProps) {
  const { title } = todo;

  return <div className={`${styles.todoItem}`}>{title}</div>;
}

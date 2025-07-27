import { ItemList } from "@/shared/ui/ItemList/ItemList";
import { Todo } from "@/entities/todo/ui/Todo";
import type { TodoListProps } from "../model/types";
import styles from "./TodoList.module.css";

export function TodoList({ todos, type }: TodoListProps) {
  return (
    <div className={`${styles.todosContainer} ${styles[type]}`}>
      <h3 className={styles.todosTitle}>
        {type === "active" ? "Активные" : "Выполенные"} ({todos.length})
      </h3>
      <ItemList items={todos} listClassName={styles.todosList}>
        {(todo) => <Todo todo={todo} />}
      </ItemList>
    </div>
  );
}

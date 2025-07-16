// import { withLoading } from "@/shared/lib/hoc/withLoading";
import styles from "./TodoList.module.css";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type TodoListProps = {
  todos: Todo[];
};

const renderTodoItem = (todo: Todo) => (
  <li key={todo.id} className={`${styles.todoItem}`}>
    {todo.title}
  </li>
);

export function TodoList({ todos }: TodoListProps) {
  const activeTodos = todos
    .filter((todo) => !todo.completed)
    .map(renderTodoItem);

  const completedTodos = todos
    .filter((todo) => todo.completed)
    .map(renderTodoItem);

  return (
    <div>
      <div className={styles.activeContainer}>
        <h3 className={styles.todosTitle}>Активные ({activeTodos.length})</h3>
        <ul className={styles.todosList}>{activeTodos}</ul>
      </div>
      <div className={styles.completedContainer}>
        <h3 className={styles.todosTitle}>
          Выполенные ({completedTodos.length})
        </h3>
        <ul className={styles.todosList}>{completedTodos}</ul>
      </div>
    </div>
  );
}

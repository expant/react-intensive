import type { Todo } from "@/entities/todo/model/types";

export type TodoListType = "active" | "completed";

export type TodoListProps = {
  todos: Todo[];
  type: TodoListType;
};

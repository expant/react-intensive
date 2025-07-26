import { useParams } from "react-router-dom";
import { useGetTodosQuery } from "@/entities/todo/api/todosApi";
import { filterById } from "@/shared/lib/data/filterById";

export function useTodos() {
  const { id: userId } = useParams<{ id: string }>();
  const { data: todos = [] } = useGetTodosQuery();

  const filteredTodos = filterById(todos, "userId", Number(userId));
  const activeTodos = filteredTodos.filter((todo) => !todo.completed);
  const completedTodos = filteredTodos.filter((todo) => todo.completed);

  return {
    activeTodos,
    completedTodos,
  };
}

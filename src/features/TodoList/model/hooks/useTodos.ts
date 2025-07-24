import { useParams } from "react-router-dom";
import { filterById } from "@/shared/lib/data/filterById";
import { mockTodos } from "@/shared/mocks/todos";

export function useTodos() {
  const { id: userId } = useParams<{ id: string }>();
  const filteredTodos = filterById(mockTodos, "userId", Number(userId));

  const activeTodos = filteredTodos.filter((todo) => !todo.completed);
  const completedTodos = filteredTodos.filter((todo) => todo.completed);

  return {
    activeTodos,
    completedTodos,
  };
}

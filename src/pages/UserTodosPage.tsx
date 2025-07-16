import { useParams } from "react-router-dom";
import { TodoList } from "@/widgets/TodoList/TodoList";
import { mockTodos } from "@/shared/mocks/todos";
import { filterById } from "@/shared/lib/data/filterById";

export function UserTodosPage() {
  const { id: userId } = useParams<{ id: string }>();
  const filteredTodos = filterById(mockTodos, "userId", Number(userId));

  return (
    <div>
      <TodoList todos={filteredTodos} />
    </div>
  );
}

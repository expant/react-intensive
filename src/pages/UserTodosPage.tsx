import { useTodos } from "@/features/TodoList/model/hooks/useTodos";
import { TodoList } from "@/widgets/TodoList/ui/TodoList";

export function UserTodosPage() {
  const { activeTodos, completedTodos } = useTodos();

  return (
    <div>
      <TodoList todos={activeTodos} type="active" />
      <TodoList todos={completedTodos} type="completed" />
    </div>
  );
}

import { NewTodoCard } from "@/components/cards/new-todo-card";
import { TodoCards } from "@/components/cards/todo-cards";

export default function Page() {
  return (
    <div
      className="min-h-screen min-w-screen flex justify-center bg-gray-100 p-4"
    >
      <div className="flex space-x-2">
        <NewTodoCard />
        <TodoCards />
      </div>
    </div>
  )
}
import { getDb } from "@/lib/db"
import { TodoCard } from "@/components/cards/todo-card"

export const TodoCards = async () => {
  const db = await getDb()
  const todos = await db.collection("todos")
    .find({ done: false })
    .sort({ created: -1 })
    .toArray()
  return (
    <div className="flex flex-col w-[300px]">
      {todos.map((todo) => (
        <TodoCard
          key={todo._id.toString()}
          id={todo._id.toString()}
          title={todo.title}
          content={todo.content}
          created={todo.created.toLocaleString("th-TH", { timeZone: "Asia/Bangkok" })}
        />
      ))}
    </div>
  )
}
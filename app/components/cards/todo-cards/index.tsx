import { getDb } from "@/lib/db"
import { TodoCard } from "@/components/cards/todo-card"
import { getServerSession } from "next-auth"

export const TodoCards = async () => {
  const session = await getServerSession()
  const db = await getDb()
  const filter = session ? {done: false, user: session.user!.name} : { done: false, user: null }
  const todos = await db.collection("todos")
    .find(filter)
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
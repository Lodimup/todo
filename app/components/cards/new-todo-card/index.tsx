import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { newTodo } from "./actions"
import { Input } from "@/components/ui/input"
import { SubmitBtn } from "./submit-btn.component"

export const NewTodoCard = () => {
  return (
    <Card className="w-[300px] h-fit">
      <CardHeader>
        <CardTitle>New todo</CardTitle>
        <CardDescription>Your todo is public if not signed in!</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={newTodo} className="flex flex-col space-y-2">
          <Input name="title" placeholder="title" />
          <Input name="content" placeholder="content" />
          <SubmitBtn />
        </form>
      </CardContent>
    </Card>
  )
}
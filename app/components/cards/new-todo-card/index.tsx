import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { newTodo } from "./actions"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const NewTodoCard = () => {
  return (
    <Card className="w-[300px] min-h-screen">
      <CardHeader><CardTitle>New todo</CardTitle></CardHeader>
      <CardContent>
        <form action={newTodo} className="flex flex-col space-y-2">
          <Input name="title" placeholder="title"/>
          <Input name="content" placeholder="content"/>
          <Button>Submit</Button>
        </form>
      </CardContent>
    </Card>
  )
}
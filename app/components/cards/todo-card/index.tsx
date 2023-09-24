import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DoneBtn } from "./done-btn.component"

interface ITodoCard {
  id: string
  title: string
  content: string
  created: string
}

export const TodoCard = (props: ITodoCard) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
        {props.title}
        </CardTitle>
        <CardDescription>
          {props.created}
        </CardDescription>
      </CardHeader>
      <CardContent>{props.content}</CardContent>
      <CardFooter className="flex justify-end">
        <DoneBtn todoId={props.id}/>
      </CardFooter>
    </Card>
  )
}
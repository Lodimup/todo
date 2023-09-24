'use client'

import { Button } from "@/components/ui/button"
import { markDone } from "./actions"

interface IDoneBtn {
  todoId: string
}

export const DoneBtn = (props: IDoneBtn) => {
  return (
    <form
      action={markDone}
    >
      <input
        type="hidden"
        name="todoId"
        value={props.todoId}
      />
      <Button>
        Done
      </Button>
    </form>
  )
}
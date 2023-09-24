'use client'

import { markDone } from "./actions"
import { SubmitBtn } from "./submit-btn.component"

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
      <SubmitBtn/>
    </form>
  )
}
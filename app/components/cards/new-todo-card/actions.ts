'use server'

import { getDb } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function newTodo (formData: FormData) {
  const data = Object.fromEntries(formData.entries())
  if (data.title === "") return
  const db = await getDb()
  const payload = {
    ...data,
    created: new Date(),
    done: false
  }
  await db.collection('todos').insertOne(payload)
  revalidatePath('/')
}
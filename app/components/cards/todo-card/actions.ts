'use server'

import { getDb } from "@/lib/db"
import { ObjectId } from "mongodb"
import { revalidatePath } from "next/cache"

export async function markDone(formData: FormData) {
  const data = Object.fromEntries(formData.entries())
  const db = await getDb()
  await db.collection('todos').updateOne({ _id: new ObjectId(data.todoId.toString()) }, { $set: { done: true } })
  revalidatePath('/')
}
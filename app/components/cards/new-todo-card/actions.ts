'use server'

import { getDb } from "@/lib/db"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"

export async function newTodo (formData: FormData) {
  const session = await getServerSession()
  const data = Object.fromEntries(formData.entries())
  if (data.title === "") return
  const db = await getDb()
  const payload = {
    ...data,
    created: new Date(),
    done: false,
    user: null as string | null
  }
  if (session) {
    payload.user = session.user!.name as string  // use email your in real app! to use email you need to ask line's permission
  }
  await db.collection('todos').insertOne(payload)
  revalidatePath('/')
}
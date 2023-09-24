'use client'

import { Button } from '@/components/ui/button'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export function SubmitBtn() {
  const { pending } = useFormStatus()

  return (
    <Button disabled={pending}>{pending ? 'Submitting...' : 'Submit'}</Button>
  )
}
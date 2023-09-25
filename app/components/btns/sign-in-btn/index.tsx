'use client'

import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"

export const SignInBtn = ({ className }: {className?: string}) => {
  return (
    <Button
      className={className}
      onClick={() => {signIn('line')}}
    >
      Sign in
    </Button>
  )
}
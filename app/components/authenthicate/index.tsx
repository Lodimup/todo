import { getServerSession } from "next-auth"
import { SignOutBtn } from "@/components/btns/sign-out-btn"
import { SignInBtn } from "@/components/btns/sign-in-btn"

export const Authenthicate = async ({ className }: { className?: string }) => {
  const session = await getServerSession()
  return (
    <div className={className}>
      {
        session
          ? <SignOutBtn className="rounded-full w-24 bg-red-500" />
          : <SignInBtn className="rounded-full w-24" />
      }
    </div>
  )
}
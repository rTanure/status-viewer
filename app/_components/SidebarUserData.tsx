import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SignOutButton from "./SignOutButton";

export async function SidebarUserData() {
  const session = await getServerSession(authOptions)
  if(!session) return redirect("/auth")
  
    

  return (
    <div className="flex gap-4 items-center p-4">
      <Avatar className="size-14">
        <AvatarImage src={session?.user?.image || ""}/>
        <AvatarFallback className="bg-primary text-secondary">{session?.user?.name?.charAt(0) || "a"}</AvatarFallback>
      </Avatar>
      <div>
        <h2 className="text-lg font-bold">{session?.user?.name}</h2>
        <SignOutButton />
      </div>
    </div>
  )
}
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { SidebarUserData } from "../_components/SidebarUserData";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SidebarStatus } from "../_components/SidebarStatus";
import { StatusList } from "../_components/StatusList";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Dashboard",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions)

  if(!session) redirect("/auth")

  return (
    <div className="flex items-stretch">
      <div className=" flex flex-col border w-72 h-screen">
        <SidebarUserData />
        <Separator />
        <ScrollArea className="px-4 flex-1">
          <StatusList />
          {/* <div className="h-fit flex flex-col gap-3 relative py-4">
            <h1 className="font-semibold text-2xl sticky">My favorites:</h1>
            <p>Will be implemented</p>
          </div> */}
        </ScrollArea>
        <Separator />
        <div className="p-4 flex">
          <Link href="/dashboard/new-status" className="w-full">
            <Button variant={"outline"} className="w-full">
              New Status
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex-1 max-h-screen px-4">
        {children}
      </div>
    </div>
  )
}

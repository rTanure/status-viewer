import DataViewer from "@/app/_components/status_page/DataViewer";
import { authOptions } from "@/utils/auth";
import prisma from "@/utils/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export const dynamic = "force-dynamic"

export default async function Status({params}: {params: {id: string}}) {
  const status = await prisma.status.findUnique({
    where: {
      id: params.id
    },
    include: {
      owner: true
    },
  })
  const session = await getServerSession(authOptions)

  if(status?.owner.email === session?.user?.email) {
    redirect("/dashboard?status=" + params.id)
  }
  

  return (
    <div>
      <DataViewer id={params.id}/>
    </div>
  )
}
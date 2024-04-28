import axios from "axios"
import DataList from "./DataList"

import { formatDateTime } from "@/utils/time";
import { Separator } from "@/components/ui/separator";
import prisma from "@/utils/db";
import { Status } from "@prisma/client";
interface StatusProps {
  id: string,
  ownerName: string,
  title: string,
  data: string,
  updatedAt: string
}

async function getStatusById(id: string): Promise<Status | null> {
  const status = await prisma.status.findUnique({
    where: {
      id
    }
  })
  if(!status) return null

  return status
}

export default async function DataViewer({id}: {id: string}) {
  const status = await getStatusById(id)

  if(status === null) return <h1>Not found</h1>
  
  const data = JSON.parse(status?.data || "{}")


  return (
    <div className="container">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold">Status: {status?.title}</h1>
        <div className="text-right">
          <p className="text-lg  text-primary">{status?.ownerName}</p>
          <p><span className="font-bold">{formatDateTime(status?.updatedAt)}</span></p>
        </div>
      </div>
      <Separator className="mb-6" />
      <DataList data={data}/>
    </div>
  )
}
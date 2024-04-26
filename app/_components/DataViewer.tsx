"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import DataList from "./DataList"

import { formatDateTime } from "@/utils/time";
import { Separator } from "@/components/ui/separator";


interface StatusProps {
  id: string,
  ownerName: string,
  title: string,
  data: string,
  updatedAt: string
}

export default function DataViewer({id}: {id: string}) {
  const [status, setStatus] = useState<StatusProps | null>(null)

  useEffect(()=> {
    axios.get(`/api/status/${id}`)
      .then(res => setStatus(res.data))
      .catch(err => console.error(err))
  }, [])

  const data = JSON.parse(status?.data || "{}")

  return (
    <div className="container">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold">Status: {status?.title}</h1>
        <div className="text-right">
          <p className="text-lg  text-primary">{status?.ownerName}</p>
          <p><span className="font-bold">{formatDateTime(status?.updatedAt as string)}</span></p>
        </div>
      </div>
      <Separator className="mb-6" />
      <DataList data={data}/>
    </div>
  )
}
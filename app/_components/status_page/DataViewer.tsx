"use client"

import axios from "axios"
import DataList from "./DataList"

import { Separator } from "@/components/ui/separator";
import prisma from "@/utils/db";
import { Status } from "@prisma/client";
import { DataHeader } from "./DataHeader";
import { useEffect, useState } from "react";

interface StatusProps {
  id: string,
  ownerName: string,
  title: string,
  data: string,
  updatedAt: Date
}

export default function DataViewer({id}: {id: string}) {
  const [ status, setStatus ] = useState<StatusProps | undefined>(undefined)

  useEffect(()=> {
    axios.get(`/api/status/${id}`).then(res => {
      setStatus(res.data)
    })
  }, [])
  
  const data = status ? JSON.parse(status?.data || "{}") : undefined

  return (
    <div className="container">
      <DataHeader title={status?.title} ownerName={status?.ownerName} updatedAt={status?.updatedAt} />
      <Separator className="mb-6" />
      <DataList data={data}/>
    </div>
  )
}
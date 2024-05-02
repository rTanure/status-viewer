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
  const TIMEOUT = 15

  

  useEffect(()=> {
    const fetchData = async () => {
      axios.get(`/api/status/${id}`).then(res => {
        setStatus(res.data)
      })
    }

    fetchData()
    const interval = setInterval(() => {
      fetchData()
    }, 1000 * TIMEOUT);

    return () => clearInterval(interval);
  }, [id])
  
  const data = status ? JSON.parse(status?.data || "{}") : undefined

  return (
    <div className="container">
      <DataHeader title={status?.title} ownerName={status?.ownerName} updatedAt={status?.updatedAt} />
      <Separator className="mb-6" />
      <div>
        <DataList data={data}/>
      </div>
    </div>
  )
}
"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { formatDateTime } from "@/utils/time"
import { useEffect, useState } from "react"

export interface DataHeaderProps {
  title?: string,
  ownerName?: string,
  updatedAt?: Date
}

export function DataHeader(props: DataHeaderProps) {
  const { title, ownerName, updatedAt } = props
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSegundos(prevSegundos => prevSegundos + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []); 
  

  return (
    <div className="flex justify-between  py-4 sm:flex-row flex-col sm:items-center items-start">
      {
        title 
          ? <h1 className="text-xl font-bold flex items-stretch">{title}</h1>
          : <Skeleton className="w-64 h-full"/>
      }
      {
        ownerName && updatedAt
          ? (
            <div className="text-right flex h-full flex-col sm:items-end items-start">
              <p className="text-sm  text-primary flex-1">{ownerName}</p>
              <p><span className="text-xs font-bold flex1">updated: {formatDateTime(updatedAt)}</span></p>
            </div>
          )
          : (
            <div className="flex flex-col h-full w-20 gap-1 sm:items-end items-start">
              <Skeleton className="flex-[2] w-[180%]"/>
              <Skeleton className="flex-1 w-full"/>
            </div>
          )
      }
    </div>
  )
}
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
    <div className="flex h-20 justify-between items-center p-4">
      {
        title 
          ? <h1 className="text-3xl font-bold flex items-stretch">Status: {title}</h1>
          : <Skeleton className="w-64 h-full"/>
      }
      {
        ownerName && updatedAt
          ? (
            <div className="text-right flex h-full flex-col">
              <p className="text-lg  text-primary flex-1">{ownerName}</p>
              <p><span className="font-bold flex1">last update: {formatDateTime(updatedAt)}</span></p>
            </div>
          )
          : (
            <div className="flex flex-col items-end h-full w-20 gap-1">
              <Skeleton className="flex-[2] w-[180%]"/>
              <Skeleton className="flex-1 w-full"/>
            </div>
          )
      }
    </div>
  )
}
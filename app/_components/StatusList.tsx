"use client"

import axios from "axios";
import { SidebarStatus } from "./SidebarStatus";
import { useEffect, useState } from "react";


import {SidebarStatusProps} from "./SidebarStatus"
import {Skeleton} from "@/components/ui/skeleton";

export function StatusList() {
  const [statusList, setStatusList] = useState<SidebarStatusProps[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const TIMEOUT = 15

  const fetchData = async () => {
    axios.get("/api/status")
      .then(res => setStatusList(res.data))
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false))
  }

  useEffect(()=>{
    fetchData()
    const interval = setInterval(() => {
      fetchData()
    }, 1000 * TIMEOUT)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-fit flex flex-col gap-3 relative py-4">
      <h1 className="font-semibold text-2xl sticky">My Status:</h1>
      {
        isLoading 
          ? (
            <div className="flex flex-col gap-4 ">
              <Skeleton className="w-full h-20"/>
              <Skeleton className="w-full h-20"/>
              <Skeleton className="w-full h-20"/>
              <Skeleton className="w-full h-20"/>
              <Skeleton className="w-full h-20"/>
              <Skeleton className="w-full h-20"/>
            </div>
          ) 
          : (
            statusList.length === 0 
              ? (<p className="text-center text-primary">You don't have status</p>) 
              : statusList.map((status, index)=> (
                <SidebarStatus status={status} key={index}/>
              ))    
          )
      }
    </div>
  )
}
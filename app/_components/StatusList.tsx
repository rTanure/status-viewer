"use client"

import axios from "axios";
import { SidebarStatus } from "./SidebarStatus";
import { useEffect, useState } from "react";


import {SidebarStatusProps} from "./SidebarStatus"

export function StatusList() {
  const [statusList, setStatusList] = useState<SidebarStatusProps[]>([])

  useEffect(()=>{
    axios.get("/api/status")
    .then(res => {
        setStatusList(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <div className="h-fit flex flex-col gap-3 relative py-4">
      <h1 className="font-semibold text-2xl sticky">My Status:</h1>
      {
        statusList.length === 0 
          ? (<p className="text-center text-primary">You don't have status</p>) 
          : statusList.map((status, index)=> (
              <SidebarStatus status={status} key={index}/>
            ))    
      }
    </div>
  )
}
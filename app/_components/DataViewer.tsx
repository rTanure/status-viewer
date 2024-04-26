"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import DataList from "./DataList"

interface StatusProps {
  id: string,
  owner: string,
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
      <h1>{status?.title}</h1>
      <DataList data={data}/>
    </div>
  )
}
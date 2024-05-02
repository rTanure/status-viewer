"use client"

import { useSearchParams } from "next/navigation";
import { redirect } from "next/navigation";
import { useEffect } from "react";


export default function Dashboard() {

  const searchParams = useSearchParams()
  const status = searchParams.get("status")
  useEffect(() => {

    if(status) redirect("/status/" + status)
  }, [])

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <p className="text-3xl font-semibold">welcome to your dashboard!</p>
      <p>Navigates around your status in the sidebar aside.</p>
    </div>
  )
}
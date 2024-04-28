"use client"

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";

import { useEffect, useState } from "react";

import { formatDateTime } from "@/utils/time";

export interface SidebarStatusProps {
  title: string,
  updatedAt: Date,
  id: string
}

export function SidebarStatus({status}: {status: SidebarStatusProps}) {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSegundos(prevSegundos => prevSegundos + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []); 



  return (
    <Link href={`/status/${status.id}`}>
      <Card className="p-4 hover:bg-primary-foreground cursor-pointer">
        <CardTitle>{status.title}</CardTitle>
        <CardDescription className="text-right">{formatDateTime(status.updatedAt)}</CardDescription>
      </Card>
    </Link>
  )
}
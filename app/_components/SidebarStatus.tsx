import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";

import { formatDateTime } from "@/utils/time";

export interface SidebarStatusProps {
  title: string,
  updatedAt: string,
  id: string
}

export function SidebarStatus({status}: {status: SidebarStatusProps}) {
  

  // Usage:
  // const updatedAt = "2022-01-01T12:00:00Z";
  // const formattedTime = formatDateTime(updatedAt);
  // console.log(formattedTime);

  return (
    <Link href={`/status/${status.id}`}>
      <Card className="p-4 hover:bg-primary-foreground cursor-pointer">
        <CardTitle>{status.title}</CardTitle>
        <CardDescription className="text-right">{formatDateTime(status.updatedAt)}</CardDescription>
      </Card>
    </Link>
  )
}
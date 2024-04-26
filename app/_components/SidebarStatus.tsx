import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export interface SidebarStatusProps {
  title: string,
  updatedAt: string,
  id: string
}

export function SidebarStatus({status}: {status: SidebarStatusProps}) {
  function formatDateTime(datetime: string): string {
    const currentTime = new Date();
    const targetTime = new Date(datetime);
    const timeDifference = currentTime.getTime() - targetTime.getTime();

    const seconds = Math.floor(timeDifference / 1000);
    if (seconds < 60) {
      return `${seconds} seconds ago`;
    }

    const minutes = Math.floor(timeDifference / (1000 * 60));
    if (minutes < 60) {
      return `${minutes} minutes ago`;
    }

    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    if (hours < 24) {
      return `${hours} hours ago`;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return `${days} days ago`;
  }

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
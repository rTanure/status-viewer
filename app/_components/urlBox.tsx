"use client"

import { Input } from "@/components/ui/input";
import { CopyIcon } from "lucide-react";

export function UrlBox({secret}: {secret: string}) {
  const ENDPOINT_URL = `${window.location.origin}/api/status/update/${secret}`

  return (
    <div className="w-full relative">
      <button className="rounded p-2 hover:bg-secondary bg-white absolute right-1 top-1/2 -translate-y-1/2">
        <CopyIcon className="size-4 text-primary  "/>
      </button>
      <Input readOnly className="resize-none pr-10" value={ENDPOINT_URL} />
    </div>
  )
}
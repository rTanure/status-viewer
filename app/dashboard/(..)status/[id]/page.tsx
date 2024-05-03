import { EditStatusMenu } from "@/app/_components/aditStatusMenu";
import DataViewer from "@/app/_components/status_page/DataViewer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Settings } from "lucide-react";

export const dynamic = "force-dynamic"

export default function Status({params}: {params: {id: string}}) {
  return (
    <div className="h-screen py-4">
      <ScrollArea className="h-full">
        <DataViewer id={params.id}/>
      </ScrollArea>
      <Dialog >
        <DialogTrigger asChild>
          <button className="absolute bottom-4 right-4 rounded-full bg-primary p-2 transition ease-out hover:rotate-90 opacity-40 hover:opacity-100">
            <Settings className="size-8 text-primary-foreground"/>
          </button>
        </DialogTrigger>
        <DialogContent className="w-[500px]">
          <EditStatusMenu id={params.id}/>
        </DialogContent>
      </Dialog>
    </div>
  )
}
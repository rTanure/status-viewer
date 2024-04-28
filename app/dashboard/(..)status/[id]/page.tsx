import DataViewer from "@/app/_components/status_page/DataViewer";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Status({params}: {params: {id: string}}) {
  return (
    <div className="h-full">
      <ScrollArea className="h-full">
        <DataViewer id={params.id}/>
      </ScrollArea>
    </div>
  )
}
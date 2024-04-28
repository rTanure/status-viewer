import DataViewer from "@/app/_components/DataViewer";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Status({params}: {params: {id: string}}) {
  return (
    <div>
      <ScrollArea>
        <DataViewer id={params.id}/>
      </ScrollArea>
    </div>
  )
}
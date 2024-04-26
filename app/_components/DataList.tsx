"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface DataProps extends Record<string, string | number | boolean | DataProps>{
  
}

interface DataListProps {
  data: DataProps | undefined
}

interface DataCardProps {
  title: string,
  value: string | number | boolean
}

interface DataHeaderProps {
  title: string,
  length: number
}

function DataCard({ title, value }: DataCardProps) {
  return (
    <div className="border-2 border-secondary-foreground text-primary flex justify-between p-2 rounded-sm">
      <h3 className="text-xl font-bold opacity-80">{title}</h3>
      <p className="text-xl font-medium">{value}</p>
    </div>
  )
}
const DataHeader: React.FC<DataHeaderProps> = ({ title, length, ...props }) =>  {
  return (
    <div  className="bg-primary-foreground border-2 border-secondary-foreground flex justify-between p-2 text-black rounded-sm mb-2">
      <h3 className="text-xl font-bold text-primary">{title}</h3>
      {/* <p className="text-xl font-bold">[{length}]</p> */}
    </div>
  )
}

export default function DataList({ data }: DataListProps) {

  function lengthOf(list: Object): number {
    let length = 0
    Object.entries(list).map(() => {
      length++
    })

    return length
  }

  if(!data) return <div>You don't post any data to the base</div>

  return(
    <div className="flex flex-col gap-2 flex-1">
      {
        Object.entries(data).map(([key, value]) => {
          if(typeof value === "object") {
            let length = 0
            
            return (
              <div className="-mb-3">
                <DataHeader title={key} length={lengthOf(value)}/>
                <div className="flex pl-4 pt-3 border-l-2 border-secondary-foreground -translate-y-3">
                  <DataList data={value} />
                </div>
              </div>
            )
          }

          return <DataCard title={key} value={value}/>
        })
      }
    </div>
  )
}
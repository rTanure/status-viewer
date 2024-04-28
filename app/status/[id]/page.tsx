import DataViewer from "@/app/_components/status_page/DataViewer";

export default function Status({params}: {params: {id: string}}) {
  

  return (
    <div>
      <DataViewer id={params.id}/>
    </div>
  )
}
import { DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { DeleteButton } from "./deleteButton"
import prisma from "@/utils/db"
import { UrlBox } from "./urlBox"

interface EditStatusMenuProps {
  id: string
}

export async function EditStatusMenu({ id }: EditStatusMenuProps) {

  const status = await prisma.status.findUnique({
    where: {
      id: id
    }
  })

  return (
    <>
      <DialogHeader className="w-full">
        <DialogTitle>Status Infos</DialogTitle>
        <DialogDescription>Status: Esse é o meu titulo de status</DialogDescription>
      </DialogHeader>
      <Separator/>
      <div className="">
        <div className="flex justify-between mb-1 items-center">
          <Label htmlFor="title">Endpoint URL</Label>
        </div>
        <UrlBox secret={status?.secret as string} />
      </div>
      <div>
        <DeleteButton secret={status?.secret as string} />
      </div>
    </> 
  )
}
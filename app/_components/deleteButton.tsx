"use client"

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

export function DeleteButton({secret}: {secret: string}) {
  const handleDeleteClick = () => {
    const URL = `${window.location.origin}/api/status/delete/${secret}`
    const options: RequestInit = {
      method: "DELETE"
    }

    fetch(URL, options)
      .then(e => e.json())
      .then(e => {
        window.location.href = "/dashboard"
      })
      .catch(e => console.log(e))
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-red-500 text-white px-4 py-2 rounded">Delete Status</button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>This action cannot be undone. Are you sure you want to delete this status?</DialogDescription>
        </DialogHeader>
        <div className="flex gap-2 justify-end">
          <Button 
            variant="destructive"
            onClick={handleDeleteClick}
          >Delete</Button>
          <DialogClose>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}
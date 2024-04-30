"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import axios from "axios"


export default function NewStatus() {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget

    const title = form.TitleField.value
    
    axios.post("/api/status", {title})
      .then(res => {
        console.log(res.data.newStatus.id)
        const URL = "/status/" + res.data.newStatus.id
        window.location.href = URL
      })
      .catch(err => {

      })
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Card className="min-w-96">
        <CardHeader>
          <CardTitle>Create a new Status</CardTitle>
          <CardDescription>Create a new Status in the forms bellow</CardDescription>
        </CardHeader>
        <Separator/>
        <CardContent className="py-6">
          <form onSubmit={handleSubmit} className="flex flex-col items-end gap-6">
            <div className="w-full">
              <Label>Title</Label>
              <Input required type="text" className="text-lg" name="TitleField" />
            </div>
            <Button type="submit">Create</Button>
          </form>
        </CardContent>

      </Card>
    </div>
  )
}
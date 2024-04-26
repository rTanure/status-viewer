import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export function SidebarStatus() {
  return (
    <Card className="p-4 hover:bg-primary-foreground cursor-pointer">
      <CardTitle>Coleta 01</CardTitle>
      <CardDescription className="text-right">3 hours ago</CardDescription>
    </Card>
  )
}
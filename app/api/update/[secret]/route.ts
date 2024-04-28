// Imports
import prisma from "@/utils/db"

// Interfaces
interface ContextProps {
  params: {
    secret: string
  }
}

export async function PATCH(
  request: Request,
  { params }: ContextProps
) {
  // Catch user parameters
  const body = await request.json()
  const SECRET = params.secret

  const bodyString = JSON.stringify(body)

  // Check if state exists
  const currentStatus = await prisma.status.findUnique({
    where: {
      secret: SECRET
    }
  })
  if(!currentStatus) return Response.json({message: "Status not found"}, {status: 404})
  
  // Update Status
  const updateStatus = await prisma.status.update({
    where: {
      secret: SECRET
    },
    data: {
      data: bodyString
    }
  })

  // Return success
  return Response.json({message: "status updated"}, {status: 200})
  
}
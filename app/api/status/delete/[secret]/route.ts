import { authOptions } from "@/utils/auth"
import prisma from "@/utils/db"
import { getServerSession } from "next-auth"

interface ContextProps {
  params: {
    secret: string
  }
}

export async function DELETE(
  request: Request,
  { params }: ContextProps
) {
  const secret = params.secret
  const session = getServerSession(authOptions)
  if(!session) return Response.json({message: "Unauthorized"}, {status: 401})

  const status = await prisma.status.findUnique({
    where: {
      secret
    }
  })

  if(!status) return Response.json({message: "Status not found"}, {status: 404})

  await prisma.status.delete({
    where: {
      secret
    }
  })

  return Response.json({message: "Post deleted"})
}
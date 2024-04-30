import { authOptions } from "@/utils/auth";
import prisma from "@/utils/db";
import { getServerSession } from "next-auth";

import z from "zod"

const newStatusSchema = z.object({
  title: z.string()
})

interface ContextProps {}

export async function POST(req: Request, context: ContextProps) {
  const body = await req.json()
  const { title } = newStatusSchema.parse(body)

  const session = await getServerSession(authOptions)
  if(!session) return Response.json({message: "unauthorized"}, {status:  400})
    
  const user = await prisma.user.findUnique({
    where: {
      email: session.user?.email as string
    }
  })
  if(!user) return Response.json({message: "unauthorized"}, {status:  400})

  const newStatus = await prisma.status.create({
    data: {
      title,
      ownerName: user.name as string,
      data: "",
      owner: {
        connect: {
          id: user.id
        }
      }
    }
  })

  return Response.json({newStatus}, {status: 201})
}

export async function GET() {
  const session = await getServerSession(authOptions)
  if(!session) return Response.json({message: "unauthorized"}, {status:  400})

  const user = await prisma.user.findUnique({
    where: {
      email: session.user?.email as string
    }
  })
  if(!user) return Response.json({message: "unauthorized"}, {status:  400})

  const statusList = await prisma.status.findMany({
    where: {
      ownerId: user.id
    },
    select: {
      title: true,
      updatedAt: true,
      id: true
    }
  })

  return Response.json(statusList)
}
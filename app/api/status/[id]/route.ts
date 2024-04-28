import prisma from "@/utils/db"

interface ParamsProps {
  id: string
}

export const dynamic = 'force-dynamic'

export async function GET(req: Request, {params}: {params: ParamsProps}) {
  const { id } = params

  const status = await prisma.status.findUnique({
    where: {
      id
    },
    select: {
      id: true,
      ownerName: true,
      title: true,
      data: true,
      updatedAt: true,
    }
  })
  if(!status) return Response.json({message: "Status not found"}, {status: 404})

  return Response.json(status)
}

export async function DELETE(req: Request, {params}: {params: ParamsProps}) {
  const { id } = params

  await prisma.status.delete({
    where: {
      id
    }
  })
}
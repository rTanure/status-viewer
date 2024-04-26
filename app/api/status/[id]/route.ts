import prisma from "@/utils/db"

export async function GET(req: Request, {params}: {params: {id: string}}) {
  const { id } = params

  const status = await prisma.status.findUnique({
    where: {
      id
    },
    select: {
      id: true,
      owner: true,
      title: true,
      data: true,
      updatedAt: true,
    }
  })
  if(!status) return Response.json({message: "Status not found"}, {status: 404})

  return Response.json(status)
}
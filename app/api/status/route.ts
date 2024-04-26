import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";

export async function POST() {
  const session = await getServerSession(authOptions)

  if(!session) return Response.json({message: "unauthorized"}, {status:  400})


  return Response.json({}, {status: 201})
}
import { dbConnect } from "@/lib/connection"

export async function GET() {
  const db = await dbConnect()
  const projects = await db.collection("data").find().sort({ time: -1 }).toArray()
  console.log(projects);

  return Response.json(projects)
}

import { clientPromise } from "./db";

export async function dbConnect() {
  const client = await clientPromise
  const db = client.db("my-portfolio")
  return db
}

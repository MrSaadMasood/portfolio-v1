import Contact from "@/Components/Contact";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Info"
}
export default function Page({ searchParams }: { searchParams: { monospaced: boolean } }) {
  const isMonoSpaced = !!searchParams.monospaced
  return (
    <Contact isMonoSpaced={isMonoSpaced} />
  )
}

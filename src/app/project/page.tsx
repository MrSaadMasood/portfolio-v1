import Projects from "@/Components/Projects";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects"
}

export default function Page({ searchParams }: { searchParams: { monospaced: boolean } }) {
  const isMonospaced = !!searchParams.monospaced
  return (
    <Projects isMonospaced={isMonospaced} />
  )
}

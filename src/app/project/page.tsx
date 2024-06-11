import Projects from "@/Components/Projects";

export default function Page({ searchParams }: { searchParams: { monospaced: boolean } }) {
  const isMonospaced = !!searchParams.monospaced
  return (
    <Projects isMonospaced={isMonospaced} />
  )
}

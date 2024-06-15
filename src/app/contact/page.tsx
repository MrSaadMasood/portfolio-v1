import Contact from "@/Components/Contact";

export default function Page({ searchParams }: { searchParams: { monospaced: boolean } }) {
  const isMonoSpaced = !!searchParams.monospaced
  return (
    <Contact isMonoSpaced={isMonoSpaced} />
  )
}

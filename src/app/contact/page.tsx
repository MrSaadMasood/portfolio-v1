import Contact from "@/Components/Contact";

export default function Page({ searchParams }: { searchParams: { monospaced: boolean } }) {
  console.log("the search params i", searchParams);

  const isMonoSpaced = !!searchParams.monospaced
  return (
    <Contact isMonoSpaced={isMonoSpaced} />
  )
}

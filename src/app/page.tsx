import { clsx } from "clsx"

export default function Home({ searchParams }: { searchParams: { monospaced?: boolean } }) {
  const monospaced = !!searchParams.monospaced
  return (
    <section className={clsx(`absolute bottom-3 right-4 sm:right-10 dark:text-black
      text-xs lg:text-sm
      font-bold overflow-hidden overflow-y-scroll noScroll`,
      monospaced ?
        "neue-mono lg:h-[55%] w-28 lg:w-36" : "neue-reg h-[33%] lg:h-[43%] w-28 lg:w-[8.2rem]")} >
      <p>
        Born 1998, Arifwala, Pakistan, a Fitness-Freak, Otaku, Code Nerd. I believe the Web
        World Order has yet to come! I am pursuing new complexities and paradoxes in the Web World
        Engineering. As Eren Yeager once said <span>&quot;</span>Keep moving forward. Tatakae!<span>&quot;</span>
      </p>
    </section>
  );
}

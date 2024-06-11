'use client'
import useMonoSpaced from "@/hooks/useMonoSpaced"
import { clsx } from "clsx"

export default function NameHeader() {
  const { isMonoSpaced } = useMonoSpaced()
  return (
    <div className={clsx(`text-[#d0d0d0] dark:text-black 
          h-[10%] w-[55%] md:w-[40%]  absolute z-10 `, isMonoSpaced && "neue-mono w-[65%]"
    )}>
      <h1 className="text-4xl  md:text-5xl lg:text-6xl cursor-pointer 
        hover:opacity-65 duration-300">
        Saad Masood
      </h1>
      <h2 className="text-sm  font-bold lg:text-base cursor-pointer hover:opacity-65 duration-300">
        Developer
      </h2>
    </div>
  )
}

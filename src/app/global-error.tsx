"use client";
import useMonoSpaced from "@/hooks/useMonoSpaced";
import { clsx } from "clsx"

export default function Error({ error, reset }: {
  error: Error,
  reset: () => void
}) {
  const { isMonoSpaced } = useMonoSpaced()
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center ">
      <h2 className={clsx(`text-4xl md:text-5xl text-[#d0d0d0] hover:opacity-65
        duration-300 dark:text-black font-extrabold mb-7 text-center`,
        isMonoSpaced ?
          "neue-mono tracking-tighter" : "neue-reg"
      )}>
        {error.message || "Oops! Something Went Wrong!"}</h2>
      <button className="p-3 text-black font-bold bg-white rounded-lg
          hover:cursor-pointer dark:bg-black dark:text-white hover:bg-[#949494] "
        onClick={() => reset()}>Try Again!</button>
    </div >
  );
}

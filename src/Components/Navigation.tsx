'use client'
import useMonoSpaced from "@/hooks/useMonoSpaced"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { GoDotFill } from "react-icons/go"

export default function Navigation({ link }: { link: string }) {
  const path = usePathname()
  const { isMonoSpaced } = useMonoSpaced()
  const linkToUse = link === "Home" ? "/" : `/${link.toLowerCase()}`
  const queryModifiedLink = isMonoSpaced ? `${linkToUse}?monospaced=${isMonoSpaced}` : linkToUse
  return (
    <li className="mb-4 ">
      <Link href={queryModifiedLink} className={clsx(`hover:text-[#4c4c4c] hover:dark:text-[#737373] 
        dark:text-black duration-300 lg:text-base text-sm font-bold`,
        isMonoSpaced ? "neue-mono" : "neue-reg")}>
        {path === linkToUse ? <GoDotFill /> : link}
      </Link>
    </li >
  )
}

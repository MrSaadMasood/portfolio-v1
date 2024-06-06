'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation({ link }: { link: string }) {
  const path = usePathname()
  const linkToUse = link === "Home" ? "/" : `/${link.toLowerCase()}`
  return (
    <li className="mb-4 ">
      <Link href={linkToUse} className="hover:text-[#4c4c4c] duration-300">
        {path === linkToUse ? <span className=" text-2xl"> &#x2022; </span> : link}
      </Link>
    </li >
  )
}

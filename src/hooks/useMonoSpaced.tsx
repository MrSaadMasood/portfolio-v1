'use client'
import { useSearchParams } from "next/navigation"

export default function useMonoSpaced() {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const isMonoSpaced = params.get("monospaced")
  return {
    isMonoSpaced
  }
}

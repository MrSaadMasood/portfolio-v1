'use client'

import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes"
import Introduction from "./Introduction";
import ThemeControl from "./ThemeControl";
import MouseTracker from "./MouseTracker";

export default function Background({ children }: { children: React.ReactNode }) {
  const [isBrowserEnv, setIsBrowserEnv] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()
  const [isIntroductionShown, setIsIntroductionShown] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntroductionShown(false)
    }, 1500);
    return () => clearTimeout(timer)
  }, [])


  useEffect(() => {
    setIsBrowserEnv(true)
  }, [])

  if (isIntroductionShown) {
    return (
      <Introduction />
    )
  }
  return (
    <main className="bg-black dark:bg-[#e6e6e6] text-white duration-200 ease-in
    dark:text-black
    flex justify-center items-center h-screen w-screen  px-5 py-5 sm:px-6 sm:py-6">
      <AnimatePresence mode="popLayout" initial={true}>
        <>
          <ThemeControl setTheme={setTheme} resolvedTheme={resolvedTheme} isBrowserEnv={isBrowserEnv} />
          <MouseTracker>{children}</MouseTracker>
        </>

      </AnimatePresence>
    </main>
  )
}


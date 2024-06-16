import { motion } from "framer-motion"
import { clsx } from "clsx"
import { variable } from "@/utils/framer-variables"
import { useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"

type ThemeControlProps = {
  resolvedTheme: string | undefined,
  setTheme: (value: string) => void,
  isBrowserEnv: boolean
}
export default function ThemeControl(
  { resolvedTheme, setTheme,
    isBrowserEnv }: ThemeControlProps) {
  const [monoSpaced, setMonoSpaced] = useState(false)
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const inputButtonCSS = 'w-2 h-2 sm:w-3 sm:h-3  rounded-sm border-[1px]'
  const divEnclosingLabelInputCSS = " flex justify-around h-12 sm:h-14 font-bold items-center"
  function handleFontChange(value: boolean) {
    const params = new URLSearchParams(searchParams)
    setMonoSpaced(value)
    if (!value) {
      params.delete("monospaced")
      return router.replace(`${pathname}`)
    }
    router.replace(`${pathname}?monospaced=${value}`)

  }

  function handleButtonDivCSS() {
    if (monoSpaced) {
      if (resolvedTheme === "dark") return `border-black  bg-black`
      else return `bg-[#e6e6e6] border-black`
    }
    else {
      if (resolvedTheme === "light") return "border-[#e6e6e6] bg-black"
      else return "border-black bg-[#e6e6e6]"
    }
  }

  function chageFontToMono() {
    return clsx(monoSpaced && "neue-mono font-extrabold")
  }
  return (
    <motion.div style={{ writingMode: "vertical-rl" }}
      initial="initial"
      animate="animate"
      transition={{ duration: 1 }}
      variants={variable}
      className=" h-64 w-5 absolute bottom-10 left-1 orient font-bold
          flex flex-row justify-around items-center text-[#d0d0d0] text-xs sm:text-sm neue-reg
           dark:text-black "
    >
      {isBrowserEnv &&
        <>
          <div className={divEnclosingLabelInputCSS}>
            <input type="button" name="darkMode" id="darkMode" className={
              clsx(inputButtonCSS,
                resolvedTheme === "light" ? "bg-white border-white" : "bg-transparent border-black")}
              onClick={() => {
                setTheme(resolvedTheme === "light" ? "dark" : "light")
              }} />
            <label htmlFor="darkMode" id="darkMode"
              className={chageFontToMono()}
            >DARK
            </label>
          </div>
          <div className={divEnclosingLabelInputCSS}>
            <input type="button" name="lightMode" id="lightMode" className={
              clsx(inputButtonCSS,
                resolvedTheme === "dark" ? "bg-black  border-black" : "bg-transparent border-white")}
              onClick={() => {
                setTheme(resolvedTheme === "light" ? "dark" : "light")
              }} />
            <label htmlFor="lightMode" id="lightMode"
              className={chageFontToMono()}>
              LIGHT
            </label>
          </div>
        </>
      }

      <div className=" flex justify-around items-center h-[5.5rem] sm:h-auto">
        <input type="button" name="font" id="font"
          onClick={() => handleFontChange(!monoSpaced)}
          className={
            clsx(inputButtonCSS,
              handleButtonDivCSS(),
              "duration-200"
            )} />
        <label htmlFor="font" id="font" className={chageFontToMono()}
        >MONOSPACED
        </label>
      </div>
    </motion.div >
  )
}

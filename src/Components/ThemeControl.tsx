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
          flex flex-row justify-around items-center text-[#d0d0d0] text-sm neue-reg
           dark:text-black "
    >
      {isBrowserEnv &&
        <>
          <div className=" flex justify-around h-14 font-bold items-center">
            <input type="button" name="darkMode" id="darkMode" className={
              clsx('w-3 h-3  rounded-sm border-[1px]',
                resolvedTheme === "light" ? "bg-white border-white" : "bg-transparent border-black")}
              onClick={() => {
                setTheme(resolvedTheme === "light" ? "dark" : "light")
              }} />
            <label htmlFor="darkMode" id="darkMode"
              className={chageFontToMono()}
            >DARK
            </label>
          </div>
          <div className=" flex justify-around h-14 font-bold items-center">
            <input type="button" name="lightMode" id="lightMode" className={
              clsx('w-3 h-3   rounded-sm border-[1px]',
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

      <div className=" flex justify-center items-center">
        <input type="button" name="font" id="font"
          onClick={() => handleFontChange(!monoSpaced)}
          className={
            clsx('w-3 h-3 duration-200 rounded-sm border-[1px]',
              handleButtonDivCSS()
            )} />
        <label htmlFor="font" id="font" className={chageFontToMono()}
        >Monospaced
        </label>
      </div>
    </motion.div>
  )
}

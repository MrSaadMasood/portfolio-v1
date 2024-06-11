'use client'
import { variable } from "@/utils/framer-variables"
import { AnimatePresence, motion } from "framer-motion"
import { clsx } from "clsx"

export default function Introduction() {
  return (
    <div className={clsx(`text-white flex justify-center items-center dark:text-black
        h-screen w-screen bg-black dark:bg-[#e6e6e6]`,
    )}>
      <div className="h-auto w-auto flex justify-center font-bold text-3xl 
         items-center tracking-wider  ">
        <motion.h1
          variants={variable}
          initial="initial"
          animate="animate"
          transition={{ duration: .5, type: "easein" }}
        >Saad Masood <span className="font-normal dark:text-black text-[#d0d0d0]">Portfolio</span>
        </motion.h1>

      </div>
    </div>
  )
}

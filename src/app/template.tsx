'use client'
import { variable } from "@/utils/framer-variables"
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait" initial={true} >
      <motion.div
        transition={{
          duration: 1
        }}
        initial="initial"
        animate="animate"
        variants={variable}
      >
        {children}
      </motion.div >
    </AnimatePresence>
  )
}

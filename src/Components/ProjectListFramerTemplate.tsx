'use client'
import { variable } from "@/utils/framer-variables"
import { motion } from "framer-motion"
function ProjectListFramerTemplate({ children }: { children: React.ReactNode }) {
  return (
    <motion.li className=" cursor-pointer mb-2 
      h-auto md:h-[6rem]  text-right  "
      transition={{ duration: 1 }}
      initial="initial"
      animate="animate"
      variants={variable}
    >
      {children}
    </motion.li>
  )
}

export default ProjectListFramerTemplate        

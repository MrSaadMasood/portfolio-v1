import { dbConnect } from "@/lib/connection"
import { clsx } from "clsx"
import ProjectTemplate from "./ProjectTemplate"
import Link from "next/link"

type Project = {
  [key: string]: string,
}

export const dynamic = "force-dynamic"
export default async function Projects({ isMonospaced }: {
  isMonospaced: boolean
}) {
  const db = await dbConnect()
  const projects: Project[] = await db.collection("data").find().sort({ time: -1 }).toArray()
  return (
    <ProjectTemplate>
      {projects.map((project) => {
        const date = new Date(project.time)
        return (
          <li key={project._id} className=" cursor-pointer mb-2 
              h-auto md:h-[6rem]  text-right  ">
            <Link href={`/project/${project._id}?monospaced=${isMonospaced}`}
              className="duration-500 dark:text-black 
              hover:dark:text-[#737373] hover:text-[#646464]">
              <p className={clsx(`  text-[#cecece] dark:text-black text-3xl sm:text-5xl h-[75%] md:h-[4rem] 
                duration-500 hover:text-[#646464] hover:dark:text-[#737373]  text-wrap tracking-wider
              flex justify-end items-end`, isMonospaced && "neue-mono tracking-tighter")}>
                {project.name.toUpperCase()}
              </p>
              <p className={clsx(`font-bold text-xs flex justify-end h-[25%] 
                md:h-[1.5rem] items-end text-wrap`, isMonospaced ? "neue-mono" : "neue-reg")} >
                {`${date.toLocaleString("default", {
                  month: "short",
                  year: "numeric"
                })}`}/ {project.general_category} / {project.sub_category}
              </p>
            </Link>

          </li>
        )
      })}
    </ProjectTemplate>
  )
}

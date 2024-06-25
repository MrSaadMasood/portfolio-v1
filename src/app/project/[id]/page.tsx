import ProjectTemplate from "@/Components/ProjectTemplate";
import { GoArrowUpRight } from "react-icons/go";
import { dbConnect } from "@/lib/connection";
import { clsx } from "clsx";
import { randomUUID } from "crypto";
import { ObjectId } from "mongodb";

export default async function ProjectDetail({ params, searchParams }: {
  params: { id: string },
  searchParams: { monospaced: boolean }
}) {
  const db = await dbConnect()
  const project = await db.collection("data").findOne<Project>({ _id: new ObjectId(params.id) })
  if (!project) throw new Error("Failed to get project details!")
  const isMonospaced = !!searchParams.monospaced
  return (
    <ProjectTemplate>
      <li key={project._id} className=" cursor-pointer mb-2 
              h-auto md:h-[6rem]  text-right  ">
        <div
          className="duration-500 dark:text-black  space-y-2">
          <a href={project.link} target="_blank" className={clsx(`  text-[#cecece] 
            dark:text-black text-3xl sm:text-5xl h-[75%] md:h-[4rem] 
            duration-500 hover:text-[#737373] hover:dark:text-[#737373]  text-wrap tracking-wider
            flex justify-end items-end font-bold`, isMonospaced ? "neue-mono tracking-tighter" : "neue-reg")}>
            <h2 className="flex">{<GoArrowUpRight />}{project.name.toUpperCase()}</h2>
          </a>
          {Object.keys(project.description).map(key => (
            <div key={randomUUID()} className={clsx(`  flex flex-col justify-end  
                 sm:text-3xl text-xl items-end text-wrap space-y-2 `, isMonospaced && "neue-mono")} >
              <span className="font-bold hover:text-[#737373] duration-300">{key.toUpperCase()}</span>
              <ul className="space-y-1">
                {project.description[key].map(feature => (
                  <li key={randomUUID()} className={clsx(`  flex justify-end h-[25%] 
                md:h-[1.5rem] sm:text-2xl text-lg items-end text-wrap`, isMonospaced && "neue-mono")}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </li>

    </ProjectTemplate>
  )
}

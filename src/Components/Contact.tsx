import { GoArrowUpRight } from "react-icons/go";
import { v4 as uuid } from "uuid"
import { clsx } from "clsx"

export default function Contact({ isMonoSpaced }: { isMonoSpaced: boolean }) {
  const contactLinks = [
    {
      content: "Github",
      link: "https://github.com/MrSaadMasood"
    },
    {
      content: "Linkedin",
      link: "https://www.linkedin.com/in/saad-masood-8b100125b/"
    }
  ]
  return (
    <section className={clsx(`absolute bottom-8 md:bottom-1/2 md:left-2/3
      left-4  flex flex-col justify-end 
       h-72 w-44`)}>
      <ul className="text-xs font-bold">
        {contactLinks.map((contact) => {
          return (
            <li className={clsx(`mb-1 flex w-full md:text-sm lg:text-base neue-reg
              font-bold hover:dark:text-[#737373]
              dark:text-black duration-300 `, isMonoSpaced ? "neue-mono font-bold"
              : "neue-reg font-bold")} key={uuid()}>
              <a target="_blank" href={contact.link}>{contact.content}</a>
              <div>
                <GoArrowUpRight />
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

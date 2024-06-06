import { GoArrowUpRight } from "react-icons/go";

export default function Contact() {
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
    <section className="absolute bottom-8 flex flex-col justify-end  left-4 h-72 w-44">
      <ul className="text-xs font-bold">
        {contactLinks.map((contact, index) => {
          return (
            <li className="mb-1 flex w-full" key={index}>
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

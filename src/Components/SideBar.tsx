import Navigation from "./Navigation"
import { v4 as uuid } from "uuid"

export default function SideBar() {
  const navigationLinks = ["Home", "Project", "Contact"]
  return (
    <header className="w-[30%] h-[20%] font-bold absolute top-36 md:top-44 text-xs">
      <ol className="">
        {navigationLinks.map((link) => (
          <Navigation key={uuid()} link={link} />
        ))}
      </ol>
    </header>
  )
}

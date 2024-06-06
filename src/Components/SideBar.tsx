import Navigation from "./Navigation"

export default function SideBar() {
  const navigationLinks = ["Home", "Project", "Contact"]
  return (
    <header className="w-[30%] h-[20%] font-bold absolute top-32 text-xs">
      <ol className="">
        {navigationLinks.map((link, index) => (
          <Navigation key={index} link={link} />
        ))}
      </ol>
    </header>
  )
}

export default async function Projects() {
  return (
    <ul className="absolute top-0 right-3  h-[100%] w-[90%] md:w-[90%] md:right-8 pt-32 md:pt-52 pb-20
      overflow-hidden overflow-y-scroll noScroll">
      {Array(40).fill(0).map((item, index) => {
        return (
          <li key={index} className=" cursor-pointer mb-2
            text-white  h-[10%] md:h-[6rem]  text-right ">
            <a className="duration-700 hover:text-[#646464]">
              <p className="  text-[#cecece] text-4xl sm:text-6xl h-[75%] md:h-[4rem] 
                duration-700 hover:text-[#646464] text-wrap
              flex justify-end items-end  ">
                haleeluuy project
              </p>
              <p className="font-bold text-xs  flex justify-end h-[25%]
                 md:h-[1.5rem] items-end text-wrap">
                Feb.2021/ Commission / Portfolio
              </p>
            </a>

          </li>
        )
      })}
    </ul >
  )
}

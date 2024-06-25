export default function ProjectTemplate({ children }: { children: React.ReactNode }) {
  return (
    <ul className='absolute top-0 right-3  h-[100%] w-[90%] sm:w-auto  md:w-auto
      md:max-w-[90%] md:right-8 pt-32 md:pt-52 pb-20
      overflow-hidden overflow-y-scroll noScroll'>
      {children}
    </ul>
  )
}

'use client'

import React, { useEffect, useRef, useState } from "react";

export default function Background({ children }: { children: React.ReactNode }) {
  const backgroundDivElement = useRef<HTMLDivElement>(null)
  const [coordinates, setCoordintes] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const backGroundDiv = backgroundDivElement.current
    if (!backGroundDiv) return

    const mouseTracker = (e: MouseEvent) => {
      console.log("The x ", e.pageX, "the y ", e.pageY)
      setCoordintes(() => ({
        x: e.pageX,
        y: e.pageY
      }))
    }

    backGroundDiv.addEventListener("mousemove", mouseTracker)
    return () => backGroundDiv.removeEventListener("mousemove", mouseTracker)

  }, [backgroundDivElement])
  return (
    <div ref={backgroundDivElement}
      className="h-[100%]  w-screen px-6 py-6 border-[1px] border-[#4c4c4c] text-white relative
        overflow-hidden">
      <div style={{
        top: `${coordinates.y - 30}px`,
        left: `${coordinates.x - 25}px`
      }} className={` text-white absolute 
            h-[44rem] w-[44rem] center circle
          rounded-full  `}>
      </div>
      {children}
    </div>
  )
}


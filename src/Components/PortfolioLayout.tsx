import React from "react";
import SideBar from "./SideBar";
import Background from "./Background";

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-black text-white
    flex justify-center items-center h-screen w-screen  px-5 py-5 sm:px-6 sm:py-6">
      <Background >
        <>
          <div className="text-[#d0d0d0] h-[10%] w-[55%] absolute z-10  ">
            <h2 className="text-3xl cursor-pointer hover:opacity-65 duration-300">
              Saad Masood
            </h2>
            <p className="text-sm cursor-pointer hover:opacity-65 duration-300">
              Developer
            </p>
          </div>
          {children}
          <SideBar />
        </>
      </Background>
    </main>

  )
}


import React from "react";
import Background from "./Background";
import NameHeader from "./NameHeader";
import SideBar from "./SideBar";
export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <Background >
      <>
        <NameHeader />
        {children}
        <SideBar />
      </>
    </Background>

  )
}


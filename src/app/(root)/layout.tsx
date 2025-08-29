import Navbar from "@/shared/Navbar";
import React, { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[#F9F9FF] ">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;

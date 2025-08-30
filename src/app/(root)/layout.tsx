import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import React, { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[#FFFFFF] ">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;

"use client";
import Image from "next/image";
import SideImage from "@/public/sideImage.jpg";
import SingUp from "../_components/users/SingUp";
import { useState } from "react";
import Login from "../_components/users/Login";

export default function Users() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <main className="grid grid-cols-2 gap-4 h-[90vh] m-[60px_0_120px]">
      <div className="relative w-full h-full">
        <div className="absolute top-0 left-[-195px] w-[calc(100%+195px)] h-full bg-[#CBE4E8] flex items-center justify-center overflow-hidden rounded-r-md">
          <div className="relative w-full h-full ">
            <Image
              src={SideImage}
              className="absolute bottom-0 w-full h-auto"
              style={{ objectFit: "contain" }}
              alt="Login"
            />
          </div>
        </div>
      </div>
      <div className="  flex items-center justify-end">
        {activeTab == 0 ? (
          <SingUp onSwitchToLogin={() => setActiveTab(1)} />
        ) : (
          <Login />
        )}
      </div>
    </main>
  );
}

"use client";
import React from "react";
import DateAudio from "../ui/DateAudio";
import Button from "../ui/CustomButton";
import Image from "next/image";
import JBLimg from "@/public/JBL.png";

function AudioEnhancer() {
  return (
    <section className="my-[70px] p-[40px_30px] md:p-[70px_60px] bg-primary-20 text-primary-7 relative">
      <div className=" grid grid-cols-1 md:grid-cols-5">
        <div className="md:col-span-3 laptop:col-span-2">
          <p className="text-primary-12 font-semibold text-base"> Categories</p>
          <h2 className="my-8 md:text-3xl  desktop:text-5xl font-semibold desktop:leading-[60px]">
            Enhance Your Music Experience
          </h2>
          <DateAudio />
          <Button
            className={"bg-primary-12 mt-10 text-primary-7"}
            onClick={() => {}}
          >
            Buy Now!
          </Button>
        </div>
        <div className="relative w-full h-auto md:col-span-2 laptop:col-span-3">
          <Image
            src={JBLimg}
            fill
            style={{ objectFit: "contain" }}
            alt="foto"
          />
        </div>
      </div>
    </section>
  );
}

export default AudioEnhancer;

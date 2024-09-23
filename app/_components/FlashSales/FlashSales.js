"use client";

import React, { useRef } from "react";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import DateComponent from "../ui/Date";
import ProductSwiper from "../ui/ProductSwiper";
import Button from './../ui/CustomButton';
import FastProduct from "@/app/_lib/data";
import {SwiperSlide} from "swiper/react";
import ProductCard from "@/app/_components/ProductCard";

function FlashSales() {
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  return (
    <section className="mt-[140px] border-b-2 pb-[60px]">
      <div className="mb-[40px] ">
        <span className="FlashSales__title text-[#DB4444] relative font-semibold text-base">
          Today’s
        </span>
        <div className="mt-6 flex justify-between">
          <div className="flex items-end">
            <h2 className="text-[36px] leading-8 font-semibold mb-0">
              Flash Sales
            </h2>
            <DateComponent />
          </div>
          <div className="flex items-center">
            <button
              ref={prevRef}
              className="w-[46px] flex justify-center items-center text-xl mr-2 h-[46px] bg-primary-7 rounded-full"
            >
              <GrLinkPrevious />
            </button>
            <button
              ref={nextRef}
              className="w-[46px] flex justify-center items-center text-xl h-[46px] bg-primary-7 rounded-full"
            >
              <GrLinkNext />
            </button>
          </div>
        </div>
      </div>
      <ProductSwiper type="" nextRef={nextRef} prevRef={prevRef} slidesPerView={4} >
        {FastProduct.map((product, index) => (
          <SwiperSlide key={index} className="w-full item">
            <ProductCard product={product} />
          </SwiperSlide>
      ))}
      </ProductSwiper>
      <div className="flex justify-center items-center">
        <Button
          className=" mt-[60px] bg-primary-9 text-primary-7 "
          onClick={() => {}}
        >
          View All Products
        </Button>
      </div>
    </section>
  );
}

export default FlashSales;

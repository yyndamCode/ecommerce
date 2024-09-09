"use client";
import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "@/app/_styles/styles.css";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import "swiper/css/navigation";
import FastProduct from "@/app/_lib/data";
import ProductCard from "../ProductCard";
function ProductSwiper( {type, nextRef, prevRef,slidesPerView ,children}) {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}

        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: slidesPerView,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation,...(type === "PersonDetails" ? [Pagination] : [])]}
        pagination={type === "PersonDetails" ? { clickable: true } : false}
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.params.navigation.prevEl = prevRef.current;
        }}
      >
          {children}
      </Swiper>
     
    </div>
  );
}

export default ProductSwiper;

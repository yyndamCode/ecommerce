"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "@/app/_styles/slickSlider.css";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import sliderImg from "@/public/foto.jpg";
import heroLogo from "@/public/1200px-Apple_gray_logo.png";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

function AutoplaySwiper({spaceBetween,slidesPerView}) {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 2000,
      }}
      loop={true}
      pagination={{ clickable: true }}
      onSlideChange={() => "slide change"}
      onSwiper={(swiper) => swiper}
    >
      <SwiperSlide>
        <div className="relative grid grid-cols-1 md:grid-cols-5  text-start bg-primary-20  h-auto text-primary-7">
          <div className="md:col-span-2 p-[58px_0_46px_66px]">
            <div className="flex items-center ">
              <div className="w-[40px] h-[50px]">
                <Image src={heroLogo} alt="logo" className="w-4 "  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
              </div>
              <p className="ml-[25px]">iPhone 14 Series</p>
            </div>
            <h1 className="text-[52px]  leading-[64px] my-5 font-semibold">
              Up to 10% off Voucher
            </h1>
            <Link href={"/"} className="flex items-center">
              <p className=" border-b-[1px] ">Shop Now</p>
              <span className="ml-4">
                <FaArrowRight />
              </span>
            </Link>
          </div>
          <div className="md:col-span-3 relative h-auto">
            <Image
              src={sliderImg}
              fill
              className=" "
              objectFit="contain"
              alt="foto"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative grid grid-cols-1 md:grid-cols-5  text-start bg-primary-20  h-auto text-primary-7">
          <div className="md:col-span-2 p-[58px_0_46px_66px]">
            <div className="flex items-center ">
              <div className="w-[40px] h-[50px]">
                <Image src={heroLogo} alt="logo" className="w-4 "   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
              </div>
              <p className="ml-[25px]">iPhone 14 Series</p>
            </div>
            <h1 className="text-[52px]  leading-[64px] my-5 font-semibold">
              Up to 10% off Voucher
            </h1>
            <Link href={"/"} className="flex items-center">
              <p className=" border-b-[1px] ">Shop Now</p>
              <span className="ml-4">
                <FaArrowRight />
              </span>
            </Link>
          </div>
          <div className="md:col-span-3 relative h-auto">
            <Image
              src={sliderImg}
              fill
              className=" "
              objectFit="contain"
              alt="foto"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default AutoplaySwiper;

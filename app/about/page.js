"use client"

import Link from "next/link";
import Image from "next/image";
import AboutImage from "@/public/about.png";
import {LiaShippingFastSolid} from "react-icons/lia";
import {Card} from "@/app/_components/ui/Card";
import ProductSwiper from "@/app/_components/ui/ProductSwiper";
import PersonDetails from "@/app/_lib/PersonDetails";
import {SwiperSlide} from "swiper/react";
import {LuTwitter} from "react-icons/lu";
import {FaInstagram} from "react-icons/fa";
import {RiLinkedinLine} from "react-icons/ri";
import ServiceHighlights from "@/app/_components/ServiceHighlights";

export default function Page() {
    return <main className="relative my-20 ">
        <div className="flex items-center mb-10"><Link href={"/"} className="text-sm text-gray-400">
            Home
        </Link>
            <p className="mx-2 text-gray-400">/</p>
            <Link href={"/contact"} className="text-sm ">
                About
            </Link></div>

        <section className="relative grid grid-cols-2 gap-16  justify-center items-center">
            <div>
                <h1 className="text-[54px] leading-[64px] font-semibold">Our Story</h1>
                <p className="mt-10 text-base ">Launced in 2015, Exclusive is South Asia’s premier online shopping
                    makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing,
                    data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
                    customers across the region. </p>

                <p className="mt-10 text-base ">Exclusive has more than 1 Million products to offer, growing at a very
                    fast.
                    Exclusive offers a diverse assotment in categories ranging from consumer.
                </p>
            </div>
            <div className="relative w-full h-[609px]">
                <div
                    className="absolute top-0 right-[-200px] w-[calc(100%+200px)] h-full
                     flex items-center justify-center overflow-hidden rounded-l-md">
                    <div className="relative w-full h-full ">
                        <Image
                            src={AboutImage}
                            className="  w-full h-auto"
                            style={{objectFit: "contain"}}
                            alt="Login"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>
            </div>
        </section>

        <section className="relative my-[140px] ">
            <div className="grid grid-cols-4 gap-8">

                <Card className="serviceCard   border px-[50px] py-[30px] grid gap-6 justify-items-center rounded-md
                hover:bg-primary-9 hover:text-primary-7 ">
                    <div className="p-3 w-[80px] bg-gray-300 rounded-full">
            <span
                className="w-[58px] h-[58px] circle flex items-center justify-center text-4xl rounded-full">
              <LiaShippingFastSolid/>
            </span>
                    </div>
                    <article>
                        <h2 className="text-[32px] text-center leading-[30px] font-bold uppercase">
                            10.5k</h2>
                        <p className="text-sm font-normal mt-3">
                            Sallers active our site
                        </p>
                    </article>
                </Card>
                <Card className="serviceCard   border px-[50px] py-[30px] grid gap-6 justify-items-center
                rounded-md
                hover:bg-primary-9 hover:text-primary-7 ">
                    <div className="p-3 w-[80px] bg-gray-300 rounded-full">
            <span
                className="w-[58px] h-[58px] circle flex items-center justify-center text-4xl rounded-full">
              <LiaShippingFastSolid/>
            </span>
                    </div>
                    <article>
                        <h2 className="text-[32px] text-center leading-[30px] font-bold uppercase">
                            10.5k</h2>
                        <p className="text-sm font-normal mt-3">
                            Sallers active our site
                        </p>
                    </article>
                </Card>
                <Card className="serviceCard   border px-[50px] py-[30px] grid gap-6 justify-items-center
                rounded-md
                hover:bg-primary-9 hover:text-primary-7 ">
                    <div className="p-3 w-[80px] bg-gray-300 rounded-full">
            <span
                className="w-[58px] h-[58px] circle flex items-center justify-center text-4xl rounded-full">
              <LiaShippingFastSolid/>
            </span>
                    </div>
                    <article>
                        <h2 className="text-[32px] text-center leading-[30px] font-bold uppercase">
                            10.5k</h2>
                        <p className="text-sm font-normal mt-3">
                            Sallers active our site
                        </p>
                    </article>
                </Card>
                <Card className="serviceCard   border px-[50px] py-[30px] grid gap-6 justify-items-center
                rounded-md
                hover:bg-primary-9 hover:text-primary-7 ">
                    <div className="p-3 w-[80px] bg-gray-300 rounded-full">
            <span
                className="w-[58px] h-[58px] circle flex items-center justify-center text-4xl rounded-full">
              <LiaShippingFastSolid/>
            </span>
                    </div>
                    <article>
                        <h2 className="text-[32px] text-center leading-[30px] font-bold uppercase">
                            10.5k</h2>
                        <p className="text-sm font-normal mt-3">
                            Sallers active our site
                        </p>
                    </article>
                </Card>
            </div>
        </section>


        <section className="relative">
            <ProductSwiper type="PersonDetails" nextRef={{}} prevRef={{}} slidesPerView={3}>
                {PersonDetails.map((product, index) => (
                    <SwiperSlide key={index} className="w-full item">
                        <Card className="w-full pb-[70px]">
                            <div
                                className="relative bg-primary-7 mb-9 flex items-center justify-center p-[32px_32px_0_32px] rounded-md">
                                <div className="relative w-[326px] h-[422px]">
                                    <Image
                                        src={product.img}
                                        alt={product.name}
                                        style={{objectFit: "cover", objectPosition: "top"}}
                                        width={326}
                                        // height={410}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />

                                </div>
                            </div>
                            <article>
                                <h2 className="text-[32px]  leading-[30px] font-bold uppercase">
                                    {product.name}
                                </h2>
                                <p className="text-sm font-normal mt-3">
                                    {product.job}
                                </p>
                            </article>
                            <div className="mt-4 flex items-center ">
                                <Link href={product.linkTwitter} className="relative text-2xl ">
                                    <LuTwitter/>
                                </Link>
                                <Link href={product.linkTwitter} className="relative mx-4 text-2xl ">
                                    <FaInstagram/>
                                </Link>
                                <Link href={product.linkTwitter} className="relative mx-4 text-2xl ">
                                    <RiLinkedinLine/>
                                </Link>
                            </div>
                        </Card>
                    </SwiperSlide>
                ))}
            </ProductSwiper>
        </section>
            <ServiceHighlights />
    </main>

}
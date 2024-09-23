"use client";
import React, { useState } from "react";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import exploreData from "../_lib/exploreData";
import Button from "./ui/CustomButton";
import ProductCard from "./ProductCard";

function ExploreProducts() {
  const [visibleProductCount, setVisibleProductCount] = useState(8); // Başlangıçta 4 ürünü göster

  const handleLoadMore = () => {
    // Daha fazla ürün yükleme işlevi
    setVisibleProductCount(visibleProductCount + 4); // Her tıklamada 4 ürün daha yükle
  };
  return (
    <section className="my-[70px] ">
      <div className="mb-[40px] ">
        <span className="FlashSales__title text-[#DB4444] relative font-semibold text-base">
          Our Products
        </span>
        <div className="mt-6 flex justify-between">
          <div className="flex items-end">
            <h2 className="text-[36px] leading-8 font-semibold mb-0">
              Explore Our Products
            </h2>
          </div>
          <div className="flex items-center">
            <button
              //   onClick={handlePreviousClick}
              className="w-[46px] flex justify-center items-center text-xl mr-2 h-[46px] bg-primary-7 rounded-full"
            >
              <GrLinkPrevious />
            </button>
            <button
              //   onClick={handleNextClick}
              className="w-[46px] flex justify-center items-center text-xl h-[46px] bg-primary-7 rounded-full"
            >
              <GrLinkNext />
            </button>
          </div>
        </div>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-3 laptop:grid-cols-4 gap-8 ">
        {exploreData.slice(0, visibleProductCount).map((product, index) => (
          <li key={index}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center">
        <Button
          className=" mt-[60px] bg-primary-9 text-primary-7 "
          onClick={handleLoadMore}
        >
          View All Products
        </Button>
      </div>
    </section>
  );
}

export default ExploreProducts;

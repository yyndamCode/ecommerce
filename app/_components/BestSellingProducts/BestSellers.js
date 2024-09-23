"use client";
import React from "react";
import { useState } from "react";
import ProductCard from "../ProductCard";
import Button from "../ui/CustomButton";
import bestSellingData from "@/app/_lib/bestSellingData";

function BestSellers() {
  const [visibleProductCount, setVisibleProductCount] = useState(4); // Başlangıçta 4 ürünü göster

  const handleLoadMore = () => {
    setVisibleProductCount(visibleProductCount + 4); // Her tıklamada 4 ürün daha yükle
  };
  return (
    <section className="relative my-[70px]">
      <div className="mb-[40px] ">
        <span className="FlashSales__title text-[#DB4444] relative font-semibold text-base">
          This Month
        </span>
        <div className=" flex justify-between">
          <div className="flex items-end">
            <h2 className="text-[36px] leading-8 font-semibold mb-0">
              Best Selling Products
            </h2>
          </div>
          <Button
            className=" mt-[60px] bg-primary-9 text-primary-7  "
            onClick={handleLoadMore}
          >
            View All
          </Button>
        </div>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-3 laptop:grid-cols-4 gap-8 ">
        {bestSellingData.slice(0, visibleProductCount).map((product, index) => (
          <li key={index}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BestSellers;

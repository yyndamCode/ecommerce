import React from "react";
import bgPlaystation from "@/public/playstation.png";
import bgWomanWearing from "@/public/woman.png";
import bgAmazon from "@/public/amazon.png";
import bgPerfume from "@/public/perfume.png";

function NewArrivals() {
  return (
    <section className="my-[70px]">
      <div className="mb-[60px] ">
        <span className="FlashSales__title text-[#DB4444] relative font-semibold text-base">
          Featured
        </span>
        <div className="mt-6 flex justify-between">
          <div className="flex items-end">
            <h2 className="2xl md:text-[36px] md:leading-8 font-semibold mb-0">
              New Arrival
            </h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative bg-primary-20 rounded-md text-primary-7 p-[88px_30px_0]">
          <div
            className="w-full flex items-end justify-start h-80 md:h-[400px] laptop:h-[560px] bg-no-repeat bg-contain bg-center md:bg-left  pb-8"
            style={{ backgroundImage: `url(${bgPlaystation.src})` }}
          >
            <div className="w-full md:w-[242px] grid gap-4">
              <h2 className="text-primary-7 font-semibold text-2xl">
                PlayStation 5
              </h2>
              <p className="  text-sm font-normal">
                Black and White version of the PS5 coming out on sale.
              </p>
              <button className="w-20 text-base text-start  font-medium border-b border-b-gray-400">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="relative col-span-2 overflow-hidden bg-[#0D0D0D] rounded-md text-primary-7">
            <div
              className=" w-full h-[288px] md:h-[100%] flex items-end justify-start  bg-no-repeat bg-right bg-contain "
              style={{ backgroundImage: `url(${bgWomanWearing.src})` }}
            >
              <div className="w-full md:w-[275px] grid gap-4 p-8 md:p-4 laptop:p-[24px_0px_24px_24px]">
                <h2 className="text-primary-7 font-semibold text-2xl">
                  Women’s Collections
                </h2>
                <p className="  text-sm font-normal">
                  Featured woman collections that give you another vibe.
                </p>
                <button className="w-20 text-base text-start  font-medium border-b border-b-gray-400">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1 p-3 tablet:p-6 bg-primary-20 rounded-md text-primary-7">
            <div
              className=" w-full h-[288px] md:h-[100%] flex items-end justify-start  bg-no-repeat bg-center bg-contain "
              style={{ backgroundImage: `url(${bgAmazon.src})` }}
            >
              <div className="w-full md:w-[242px] grid gap-1 tablet:gap-2 ">
                <h2 className="text-primary-7 font-semibold text-xl tablet:text-2xl ">
                  Speakers
                </h2>
                <p className="text-xs  tablet:text-sm font-normal">
                  Amazon wireless speakers{" "}
                </p>
                <button className="w-20 text-base text-start  font-medium border-b border-b-gray-400">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1 p-3 tablet:p-6 bg-primary-20 rounded-md text-primary-7">
            <div
              className=" w-full h-[288px] md:h-[100%] flex items-end justify-start  bg-no-repeat bg-center bg-contain "
              style={{ backgroundImage: `url(${bgPerfume.src})` }}
            >
              <div className="w-full md:w-[242px] grid gap-1 tablet:gap-2 ">
                <h2 className="text-primary-7 font-semibold text-xl tablet:text-2xl ">
                  Perfume
                </h2>
                <p className="text-xs tablet:text-sm font-normal">
                  GUCCI INTENSE OUD EDP
                </p>
                <button className="w-20 text-base text-start  font-medium border-b border-b-gray-400">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;

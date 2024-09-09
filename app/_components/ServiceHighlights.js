import React from "react";
import {LiaShippingFastSolid} from "react-icons/lia";

function ServiceHighlights() {
    return (<section className="my-[70px]">
        <div className="grid grid-cols-2 md:grid-cols-3 ">
            <div className=" grid gap-6 justify-items-center flex-col">
                <div className="p-3 w-[80px] bg-gray-300 rounded-full">
            <span

                className="w-[58px] h-[58px] bg-primary-20  text-primary-7 flex
                items-center justify-center text-4xl rounded-full">
              <LiaShippingFastSolid/>
            </span>
                </div>
                <article>
                    <h2 className="text-xl font-semibold uppercase">
                        fREE AND FAST DELIVERY
                    </h2>
                    <p className="text-sm font-normal mt-2">
                        Free delivery for all orders over $140
                    </p>
                </article>
            </div>
            <div className=" grid gap-6 justify-items-center flex-col">
                <div className="p-3 w-[80px] bg-gray-300 rounded-full">
            <span
                className="w-[58px] h-[58px] bg-primary-20  text-primary-7 flex items-center justify-center
                 text-4xl rounded-full">
              <LiaShippingFastSolid/>
            </span>
                </div>
                <article>
                    <h2 className="text-xl font-semibold uppercase">
                        fREE AND FAST DELIVERY
                    </h2>
                    <p className="text-sm font-normal mt-2">
                        Free delivery for all orders over $140
                    </p>
                </article>
            </div>
            <div className=" grid gap-6 justify-items-center flex-col">
                <div className="p-3 w-[80px] bg-gray-300 rounded-full">
            <span
                className="w-[58px] h-[58px] bg-primary-20  text-primary-7 flex items-center justify-center text-4xl rounded-full">
              <LiaShippingFastSolid/>
            </span>
                </div>
                <article>
                    <h2 className="text-xl font-semibold uppercase">
                        fREE AND FAST DELIVERY
                    </h2>
                    <p className="text-sm font-normal mt-2">
                        Free delivery for all orders over $140
                    </p>
                </article>
            </div>
        </div>
    </section>);
}

export default ServiceHighlights;

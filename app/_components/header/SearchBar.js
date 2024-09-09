"use client";
import Link from "next/link";
import {IoHeartOutline} from "react-icons/io5";
import {PiShoppingCart} from "react-icons/pi";
import {BiSearch} from "react-icons/bi";
import {LuUser} from "react-icons/lu";
import {useSelector} from "react-redux";
import {getCart} from "@/redux/ShopSlice";
import { useState} from "react";
import Dropdown from "@/app/_components/Dropdown";

 function SearchBar({isOpen}) {
    const likesData = useSelector((state) => state.like.likes);
    const productCart = useSelector(getCart);
    const [active, setActive] = useState(false);

    return (
        <div
            className={`gap-6  items-center md:flex ${
                isOpen ? "flex mt-10" : "hidden mt-0"
            }`}
        >
            <label className=" w-full flex items-center py-2 pl-5 pr-2 rounded-sm relative bg-primary-7  ">
                <input
                    type="text"
                    placeholder="What are you looking for? "
                    className="w-full text-primary-20 border-none focus:outline-none focus:ring-0 bg-transparent md:w-[16vh] p-0  mr-[34px]  text-[12px] "
                />
                <span>
          <BiSearch className="text-[20px] text-primary-20 font-bold"/>
        </span>
            </label>
            <div className="relative flex gap-4 items-center">
                <Link href={"/wishlist"} className="relative">
          <span
              className="absolute z-10 rounded-full top-[-2px] right-[-4px] bg-primary-9 text-primary-7 text-xs h-4 w-4 text-center">
            {likesData.length}
          </span>
                    <IoHeartOutline className="text-[24px] font-bold"/>
                </Link>
                <Link href={"/shop"} className="relative">
           <span
               className="absolute z-10 rounded-full top-[-2px] right-[-4px] bg-primary-9 text-primary-7
               text-xs h-4 w-4 text-center">
            {productCart.length}
          </span>
                    <PiShoppingCart className="text-[24px] font-bold"/>
                </Link>
                  {/*<Dropdown active={active} onSelect={setActive}/>*/}

            </div>

        </div>
    );
}

export default SearchBar;

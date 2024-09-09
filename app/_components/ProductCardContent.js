// components/ProductCardContent.js
"use client";
import React from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { handleLike } from "@/redux/likeSlice";
import { FaHeart } from "react-icons/fa";
import { addCart, getCurrentQuantityById } from "@/redux/ShopSlice";

const ProductCardContent = ({ product }) => {
    const dispatch = useDispatch();
    const { likes } = useSelector((state) => state.like);
    const handleLikeClick = (id) => {
        dispatch(handleLike(id));
    };

    const { id, name, img, price } = product;
    const currentQuantity = useSelector(getCurrentQuantityById(id));
    const isCart = currentQuantity > 0;

    const handleCartClick = () => {
        const newItem = {
            id: id,
            img: img,
            quantity: 1,
            name: name,
            unitPrice: price,
            totalPrice: price * 1,
        };
        dispatch(addCart(newItem));
    };

    return (
        <div className="product_card bg-[#F5F5F5] p-[50px] rounded-md overflow-hidden mb-4 relative">
            {product.discount && (
                <span className="absolute z-20 bg-[#DB4444] left-3 top-3 p-[4px_12px] text-xs text-primary-7 rounded-md">
          {product.discount}
        </span>
            )}
            <span
                onClick={() => handleLikeClick(product.id)}
                className={`absolute icon flex items-center justify-center w-[34px] h-[34px] top-3 z-20 right-3 `}
            >
        {likes.includes(product.id) ? (
            <FaHeart className="text-[20px] text-primary-9 " />
        ) : (
            <CiHeart className="text-[24px] font-bold" />
        )}
      </span>
            <span className="absolute icon flex items-center justify-center w-[34px] h-[34px] z-20 top-[55px] right-3">
        <IoEyeOutline className="text-[24px] font-bold" />
      </span>
            <div className="relative w-full h-[152px]">
                <Image
                    src={product.img}
                    style={{ objectFit: "contain" }}
                    alt="foto"
                    layout="fill"
                />
            </div>
            {!isCart && (
                <button
                    onClick={handleCartClick}
                    className="btn absolute text-center z-10 py-2 w-full bottom-0 left-0 bg-primary-20 text-primary-7"
                >
                    Add To Cart
                </button>
            )}
        </div>
    );
};

export default ProductCardContent;
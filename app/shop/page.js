"use client"
import React from 'react';
import Link from "next/link";
import {CustomCard} from "@/app/_components/ui/CustomCard";
import ProductTable from "@/app/_components/ui/ProductTable/ProductTable";
import FastProduct from "@/app/_lib/data";
import {useSelector} from "react-redux";
import {getCart} from "@/redux/ShopSlice";
import CustomButton from "@/app/_components/ui/CustomButton";

function ShopCart(props) {
    const productCart = useSelector(getCart);
    console.log(productCart,"-------")
    return (
        <main className="my-20">
            <div className="flex items-center">
                <Link href={"/"} className="text-sm text-gray-400">
                    Home
                </Link>
                <p className="mx-2 text-gray-400">/</p>
                <Link href={"/shop"} className="text-sm ">
                    Cart
                </Link>
            </div>
            <div className="my-20">
                <ProductTable productData={productCart}/>
            </div>
            <div className="flex justify-between items-center">
                <CustomButton className="border rounded-md" onClick={{}}> Return To Shop</CustomButton>
                <CustomButton className="border rounded-md" onClick={{}}> Update Cart</CustomButton>
            </div>
            <div>

            </div>
        </main>
    );
}

export default ShopCart;
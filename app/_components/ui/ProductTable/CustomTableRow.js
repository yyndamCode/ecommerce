"use client"

import React from 'react';
import {CustomCard} from "@/app/_components/ui/CustomCard";
import Image from "next/image";
import  {useState} from "react";
import { increaseItemQuantity, decreaseItemQuantity } from '@/redux/ShopSlice';
import {useDispatch} from "react-redux";
export default CustomTableRow;

function CustomTableRow({type, rowData,}) {
    const [num, setNum] = useState(rowData.quantity);
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const value = parseInt(e.target.value);
        if (value >= 0) {
            setNum(value);
            setError('');
            if (value > num) {
                dispatch(increaseItemQuantity(rowData.id));
            } else if (value < num) {
                dispatch(decreaseItemQuantity(rowData.id));
            }
        } else {
            setError('Number must be 0 or greater');
        }
    };

console.log(rowData.quantity)

    return (
        <div className="text-center">
            {
                type === "thead" ?
                    <h2>{rowData.text}</h2> :
                    <CustomCard
                        className="relative grid grid-cols-4 items-center shadow p-[40px_24px] my-10 rounded-md">
                        <div className="flex items-center ">
                            <div className="relative w-[54px] h-[54px]">
                                <Image fill src={rowData.img} alt={rowData.name} style={{objectPosition: "center"}}/>
                            </div>
                            <h2 className="ml-6">{rowData.name} </h2>
                        </div>
                        <h2>{rowData.unitPrice}</h2>
                        <div className="flex flex-col items-center">
                            <input
                                type="number"
                                className="bg-gray-50 w-16 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:none block px-3 py-2"
                                placeholder={num}
                                value={num}
                                onChange={handleChange}
                                min="0"
                                required
                            />
                            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        </div>
                        <p>{rowData.totalPrice}</p>
                    </CustomCard>

            }
        </div>

    )
}

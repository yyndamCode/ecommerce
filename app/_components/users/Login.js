"use client"
import React, { useState } from "react";
import CustomInput from "../ui/CustomInput";
import Button from "../ui/CustomButton";

export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState("993");
  const [password, setPassword] = useState("87654321");
  return <div className="w-[372px]">
       <div className='grid justify-items-start gap-6 mb-12'>
        <h2 className="text-[36px]  leading-7">Log in to Exclusive</h2>
            <p className="text-base font-poppins">Enter your details below</p>
        </div>
         <CustomInput type="number" title ="Email or Phone Number"  value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
        <CustomInput type="password" title ="Password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
          <div className="flex justify-between items-center">
            <Button className="bg-primary-9 text-primary-7 " >Log in</Button>
            <button className="text-primary-9  px-0" >Forget Password?</button>
          </div>
        </div>;
}

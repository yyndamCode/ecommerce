"use client"
import React, { useState } from 'react'
import Input from '../ui/CustomInput'
import Button from '../ui/CustomButton';
import { FcGoogle } from "react-icons/fc";

const SingUp = ({ onSwitchToLogin })=> {
 const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("993");
  const [password, setPassword] = useState("87654321");

   // Log in düğmesine tıklandığında Login bileşenini göstermek için fonksiyon
  const handleSwitchToLogin = () => {
    if (typeof onSwitchToLogin === 'function') {
      onSwitchToLogin();
    }
  };

  return (
    <div className="w-[372px]">
       <div className='grid justify-items-start gap-6 mb-12'>
        <h2 className="text-[36px]  leading-7">Create an account</h2>
            <p className="text-base font-poppins">Enter your details below</p>
        </div>
        <Input type="text" title ="Name" value={name}  onChange={(e) => setName(e.target.value)}/>
        <Input type="number" title ="Email or Phone Number"  value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
        <Input type="password" title ="Password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
        <Button className="w-full bg-primary-9 text-primary-7 mb-4"> Create Account</Button>
        <Button className="w-full bg-transparent border flex items-center mb-9"><FcGoogle className='text-2xl mr-4'/> Sign up with Google</Button>
        <div className='flex items-center justify-center'>
            <p className="text-base font-normal mr-4" >Already have account?</p>
            <Button className="border-b-2 border-gray-400" onClick={handleSwitchToLogin}>Log in</Button>
        </div>

    </div>
  )
}

export default SingUp
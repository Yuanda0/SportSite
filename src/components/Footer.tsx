import React from 'react';
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'
export default function Footer() {
  return (
    <div className='h-[160px] w-full bg-gray-800 mt-20'>
      <h1 className='text-center font-bold text-[24px] text-white'>SportSite | All rights reserved</h1>
      <p className='text-center  mt-4 text-[16px] font-bold'>Contact Number: <span className='text-white text-[16px] font-bold'> +1 (123) 456-7890</span></p>
      <p className='text-center  mt-4 text-[16px] font-bold'>Contact Number: <span className='text-white text-[16px] font-bold'>sportfitness@gmail.com</span></p>
      <div className='flex justify-center'>
         <BsFacebook size={30} className="text-blue-600 cursor-pointer" />
         <AiOutlineInstagram size={35} className="text-orange-500 cursor-pointer" />
      </div>
    </div>
  );
}

import Link from 'next/link';
import { Heebo } from 'next/font/google'
import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


const heebo = Heebo({subsets : ["latin"]})

export default function Footer() {
  return (
    <div className='bg-footerbackground space-y-6 flex items-center flex-col justify-center h-[243px]  '>
      
      <div className='flex space-x-5'>
        
        <a href={" "}><FaFacebookSquare className='w-[30px] h-[30px]'/></a>
        <a href={" "}><FaInstagram className='w-[30px] h-[30px]' /></a>
        <a href={" "}><FaTwitter className='w-[30px] h-[30px]'/></a>
        <a href={" "}><FaLinkedin className='w-[30px] h-[30px]'/> </a>
         
         
      </div>

      <p className={`${heebo.className} text-center font-medium text-[22px]`}>Copyright ©2020 All rights reserved </p>
    
    </div>
  )
}

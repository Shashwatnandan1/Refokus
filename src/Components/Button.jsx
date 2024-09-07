import React from 'react'
import { IoIosReturnRight } from "react-icons/io";
const Button = ({title = "Get Started"}) => {
  return (
    <div className='w-40  cursor-pointer px-4 py-2 flex items-center justify-between bg-zinc-100 text-black rounded-full'>
     <span className='text-sm font-medium'>{title}</span>
     <IoIosReturnRight />
    </div>
  )
}

export default Button;
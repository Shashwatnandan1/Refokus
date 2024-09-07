import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
const Card = ({start,param,width}) => {
  return (
     
    <motion.div whileHover={{backgroundColor : "#7443ff" , padding :'25px'}} className={`w-1/2   bg-zinc-800 p-5 rounded-xl flex flex-col justify-between min-h-[30rem] ${width} `}>
        <div className='w-full'>
            <div className='w-full flex justify-between mb-2 items-center'>
       <h3>one Heading</h3>
       <FaArrowRight />
     </div>
     <h1 className='text-2xl font-semibold'>whatever Heading</h1>
        </div>
     <div className='down  w-full'>

       {
        start  && (
          <>
           <h1 className='text-6xl font-semibold tracking-tight leading-none '>Start A project</h1>
           <button className='text-white mt-5 border-zinc-50 border-[1px] px-5 py-2 rounded-full'>Start Now</button>
          </>
        ) 
       }

     {
      param && (
        <>
          <p className='text-sm text-zinc-500 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </>
      )
     }
       
     </div>
    </motion.div>
  )
}

export default Card;
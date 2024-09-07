import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl py-10 flex mx-auto gap-32'>
            <div className='basis-1/2'>
            <h1 className='text-[11rem] font-semibold leading-none tracking-tight'>
               S.N
            </h1>
            </div>
            <div className='basis-1/2'>
            <div className='ml-52'>
                <h4 className='mb-10 text-zinc-500'>soicals</h4>
          {
            ["instagram","twitter","facebook","linkedin","google","instagram"]
            .map((item,index) =>(
            <a href="#"
            key={index}
            className='block mt-3 text-zinc-600 capitalize'
            >
       {item}
            </a>
  
            ))
          }
          {
            ["instagram","twitter","facebook","linkedin","google","instagram"]
            .map((item,index) =>(
            <a href="#"
            key={index}
            className='block mt-3 text-zinc-600 capitalize'
            >
       {item}
            </a>
  
            ))
          }
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;
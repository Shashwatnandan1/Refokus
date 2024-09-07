import React from 'react'
import Card from './Card';

const Cards = () => {
  return (
    <div className='w-full '>
       <div className='max-w-screen-xl mx-auto gap-2  flex  py-20'>
         <Card start={false} width={"w-1/3"} param={true}  />
         <Card start={true} width={"w-2/3"} param={false} />
       </div>
        </div>
  )
}

export default Cards;

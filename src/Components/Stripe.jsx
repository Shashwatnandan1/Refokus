import React from 'react';

const Stripe = ({e}) => {
  return (
    <div className='w-[16.66%] h-[60.6px] px-10 py-3 border-t-[1px] border-l-[1px] justify-center border-r-[1px] border-b-[1px] flex items-center bg-zinc-600'>
     <img src={e.url} alt="" />
    </div>
  );
};

export default Stripe;
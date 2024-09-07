import React from 'react';
import Button from './Button';

const NavBar = () => {
  return (
    <div className='  max-w-screen-xl mx-auto py-6 flex items-center border-b-[1px] border-zinc-500 justify-between'>

      <div className='flex gap-14'>


      <div className='links flex gap-14'>
       {["Home","Work","Culture","","news"].map((e,i)=>(
       e.length ===  0 ? <span key={i} className='w-[2px] h-7 mt-2 bg-zinc-700'></span> :
       (
        <a  key={i} className='text-md font-mono flex items-center gap-2' href="#">
        {e==="Work"  && (<span   style={{boxShadow:"0 0 0.35em #00FF19"}}  className='w-1 inline-block  h-1 bg-green-500 rounded-md'></span>)}
        {e==="Home"  && (<span   style={{boxShadow:"0 0 0.35em #ffff00"}} className='w-1 inline-block  h-1 bg-yellow-500 rounded-md'></span>)}
        {e==="Culture"  && (<span  style={{boxShadow:"0 0 0.35em #ff6868"}}  className='w-1 inline-block  h-1 bg-red-700 rounded-md'></span>)}
            {e}
        </a>
       )
       ))}

      </div>   

     
  </div>
    
       <Button/>
    </div>
  )
}

export default NavBar;


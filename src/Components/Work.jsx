import React, { useState } from "react";
import { motion,useMotionValueEvent,useScroll } from "framer-motion";



const Work = () => {

  const [Images,SetImages] = useState([
    {
      url: "https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png",
      top: "50%",
      left: "59%",
      isActive: false,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWUsA031GqLlrQsfoNXYMdwVH_l8pZGxdHkA&s",
      top: "56%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf44B_UbwgGFT5BD3R3Jxs98tYevpwwIHsmg&s",
      top: "45%",
      left: "60%",
      isActive: false,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwP-UBH_B_HpJVoxJJY_nijNB-8162DBUFYg&s",
      top: "60%",
      left: "55%",
      isActive: false,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1AghM5LCOHCPNy2nBe1Fb4bzFVTAw2iYyzw&s",
      top: "66%",
      left: "63%",
      isActive: false,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYhe0_8FOk-ACPXerccD98svv9Jyh4FeeUsA&s",
      top: "69%",
      left: "59%",
      isActive: false,
    },
  
  ]
)

const {  scrollYProgress  } = useScroll();

scrollYProgress.on("change",(data)=>{
  
  const Imageshow = (arr) =>{
     SetImages((prev)=>(
      prev.map((item,index)=>(
        arr.indexOf(index) === -1 ? (
          {...item,isActive:false}
       ):(
        { ...item,isActive:true}
      )
      ))
     ))
  }

  let res = Math.floor(data*100);
  console.log(res);
  switch(res){
    case 0:
      Imageshow([]);
     break;
    case 1:
      Imageshow([0]);
    break;
    case 2:
      Imageshow([0,1]);
    break;
    case 3:
      Imageshow([0,1,2]);
    break;
    case 4:
      Imageshow([0,1,2,3]);
    break;
    case 5:
      Imageshow([0,1,2,3,4]);
    break;
    case 6:
      Imageshow([0,1,2,3,4,5]);
    break;
   

 
  }
})
  

  return (
    <div className="w-full mt-5">
      <div className="max-w-screen-xl text-center mx-auto">
        <h1 className="text-[20vw] leading-none bg-red-600 flex select-none tracking-tight">WEEK END</h1>
        <div className="w-full h-full">
          {Images.map((e, i) => (
            e.isActive && (
              <img
                key={i}
                className="w-60 rounded-lg -translate-x-[120%] translate-y-[-80%] absolute"
                src={e.url}
                alt="logo"
                style={{ top: e.top, left: e.left }}
              />
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

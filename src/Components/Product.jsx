import React from "react";
import Button from "./Button";

const Product = ({elem,mover,index}) => {
  
  return (
    <div className="w-full py-20 h-[23rem] text-white">
      <div onMouseEnter={()=>{mover(index)}} className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-6xl capitalize font-medium">{elem.title}</h1>

        <div className="dets w-1/3">
          <p className="mb-10">
           {elem.description}
          </p>
          <div>
             {
            elem.live && <Button/>
          }
          </div>
         
        </div>
      </div>

    </div>
  );
};

export default Product;

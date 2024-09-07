import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  const p = [
    {
      title: "arquitel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo, ipsam cum eum impedit quos quae repellendu",
      live: true,
    },

    {
      title: "TTR",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo, ipsam cum eum impedit quos quae repellendu",
      live: true,
    },

    {
      title: "YIR 2024",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo, ipsam cum eum impedit quos quae repellendu",
      live: true,
    },

    {
      title: "Yahoo",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo, ipsam cum eum impedit quos quae repellendu",
      live: true,
    },
  ];

  const [Pos, SetPos] = useState(0);
  const mover = (val) => {
    SetPos(val * 23);
  };

  return (

    <div className="mt-32 relative">
      {p.map((elem, i) => (
        <Product key={i} index={i} mover={mover} elem={elem} />
      ))}

      <div className=" absolute top-0 pointer-events-none w-full h-full ">
        <motion.div
          initial={{ y: Pos, x: "-50%" }}
          className="Window overflow-hidden border-2 absolute h-[18rem] w-[28rem] left-[44%] bg-white -translate-x-[50%] "
           transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
          animate={{ y: Pos + `rem` }}
        >

          <motion.div
            animate={{ y: -Pos + `rem` }}
            className="w-full h-full bg-sky-100"
          >
     <img className="object-cover absolute h-[18rem] w-[28rem] " src="https://images.squarespace-cdn.com/content/v1/59066a076b8f5b6083962bff/3f737206-6174-4a18-b1ae-24736119e5ae/EKfG3hxU0AAKJlo.jpeg" alt="" />
          </motion.div>

          <motion.div
            animate={{ y: -Pos + `rem` }}
            className="w-full h-full bg-sky-200"
          >
        <img className="object-cover h-[18rem] w-[28rem]" src="https://www.billboard.com/wp-content/uploads/2022/06/the-weeknd-press-credit-brian-ziff-2022-billboard-1-1548.jpg" alt="" />
        <img className="object-cover h-[18rem] w-[28rem]" src="https://www.billboard.com/wp-content/uploads/2022/06/the-weeknd-press-credit-brian-ziff-2022-billboard-1-1548.jpg" alt="" />
          </motion.div>
          <motion.div
            animate={{ y: -Pos + `rem` }}
            className="w-full h-full bg-sky-300"
            
          >
         <img className="object-fill w-[28rem] h-[18rem]" src="https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png" alt="" />
          </motion.div>
          <motion.div
            animate={{ y: -Pos + `rem` }}
            className="w-full h-full bg-sky-400"
            
          >
                   <img className="object-fill h-[18rem] w-[28rem]" src="https://static01.nyt.com/images/2015/08/02/magazine/02weeknd1/02weeknd1-facebookJumbo-v2.jpg" alt="" />

                   <img className="object-fill h-[18rem] w-[28rem]" src="https://static01.nyt.com/images/2015/08/02/magazine/02weeknd1/02weeknd1-facebookJumbo-v2.jpg" alt="" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;

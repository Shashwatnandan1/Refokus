import React from "react";
import { motion } from "framer-motion";
const CustomMarquee = ({ item }) => {
  return (
    <div className="flex w-full py-8 gap-20  overflow-hidden">
       {item.map((url, idx) => (
          <img key={idx} src={url} />
        ))}
       {item.map((url, idx) => (
          <img key={idx} src={url} />
        ))}
    </div>
  );
};

export default  CustomMarquee;

import React, { useState } from "react";
import img1 from "/images/image-product-1.jpg";
import img2 from "/images/image-product-2.jpg";
import img3 from "/images/image-product-3.jpg";
import img4 from "/images/image-product-4.jpg";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { motion } from "framer-motion";

function Slider() {
  const images = [img1, img2, img3, img4];
  const [state, setState] = useState(0);

  const checkState = (state) => {
    if (state >= images.length) {
      return 0;
    } else if (state < 0) {
      return images.length - 1;
    } else {
      return state;
    }
  };

  const Next = () => {
    setState((prevState) => checkState(prevState + 1));
  };

  const Prev = () => {
    setState((prevState) => checkState(prevState - 1));
  };

  return (
    <div className="w-screen flex flex-col items-center ">
      <img className="h-100px w-[100%]" src={images[state]} alt="" />
      <div className="w-[100%] flex px-6 justify-between items-center place-items-center absolute top-[35%]">
        <motion.div
          whileTap={{
            scale: 0.9,
          }}
          whileHover={{
            scale: 1.1,
          }}
        >
          <BiChevronLeft
            onClick={Prev}
            className=" text-gray-900 shadow-xl bg-gray-200 rounded-full"
            size={40}
          />
        </motion.div>
        <motion.div
          whileTap={{
            scale: 0.9,
          }}
          whileHover={{
            scale: 1.1,
          }}
        >
          <BiChevronRight
            onClick={Next}
            className="text-gray-900   shadow-xl bg-gray-200 rounded-full"
            size={40}
          />
        </motion.div>
        {/* <p>{state}</p> */}
      </div>
    </div>
  );
}

export default Slider;

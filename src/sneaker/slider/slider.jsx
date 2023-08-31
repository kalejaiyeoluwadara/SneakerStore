import React, { useState } from "react";
import img1 from "/images/image-product-1.jpg";
import img2 from "/images/image-product-2.jpg";
import img3 from "/images/image-product-3.jpg";
import img4 from "/images/image-product-4.jpg";
import right from "../../assets/icon-next.svg";
import left from "../../assets/icon-previous.svg";
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
      <img
        className="h-100px sm:w-[80%] sm:rounded-md sm:h-[100%] w-[100%]"
        src={images[state]}
        alt=""
      />
      <div className="w-[100%] invisible flex px-6 justify-between items-center place-items-center absolute top-[40%]">
        <motion.div
          className="bg-gray-200 h-[50px] w-[50px] rounded-full flex items-center justify-center "
          whileTap={{
            scale: 0.9,
          }}
          whileHover={{
            scale: 1.04,
          }}
          transition={{
            duration: 0.3,
          }}
          onClick={Prev}
        >
          <img
            src={left}
            className=" text-gray-900 h-[20px] w-[20px] cursor-pointer shadow-xl "
            alt=""
          />
        </motion.div>
        <motion.div
          className="bg-gray-200 h-[50px] w-[50px] rounded-full flex items-center justify-center "
          whileTap={{
            scale: 0.9,
          }}
          transition={{
            duration: 0.3,
          }}
          whileHover={{
            scale: 1.1,
          }}
          onClick={Next}
        >
          <img
            src={right}
            className=" text-gray-900 h-[20px] w-[20px] cursor-pointer shadow-xl "
            alt=""
          />
        </motion.div>
        {/* <p>{state}</p> */}
      </div>
    </div>
  );
}

export default Slider;

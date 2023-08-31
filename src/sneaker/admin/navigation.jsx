import React from 'react'
import {motion} from 'framer-motion'
import { useGlobal } from '../../context';
import close from "../../assets/icon-close.svg";
function Navigation() {
  const {navigation, setNavi } = useGlobal();
  return (
    <motion.div className="w-screen flex absolute z-10"
    initial={{
      x:'100vw'
    }}
    animate={{
      x:0
    }}
    transition={{
      duration:0.5
    }}
    exit={{
      opacity:0
    }}

    >
      <div className="w-[50%] bg-white h-screen flex flex-col pl-6 pt-2 items-start">
        <div
          className="mb-8 text-[40px] font-[500] cursor-pointer text-gray-700 "
          onClick={() => setNavi(false)}
        >
          <p>
            <img className='h-6 mt-5' src={close}alt="" />
          </p>
        </div>
        <div className="flex flex-col items-start gap-8 text-[20px] capitalize font-[600] ">
          <p className='hover:text-gray-700 cursor-pointer '>Collections</p>
          <p className='hover:text-gray-700 cursor-pointer '>men</p>
          <p className='hover:text-gray-700 cursor-pointer '>women</p>
          <p className='hover:text-gray-700 cursor-pointer '>about</p>
          <p className='hover:text-gray-700 cursor-pointer '>contact</p>
        </div>
      </div>
      <div className="w-[50%] bg-black opacity-[0.6] h-screen "></div>
    </motion.div>
  );
}

export default Navigation

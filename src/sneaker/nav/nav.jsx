import React from 'react'
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import {motion,useAnimation} from 'framer-motion'
import img from '/images/image-avatar.png'
function Nav({modal,setModal,items,setItems,navigation,setNavi,control}) {
  return (
    <div className="bg-white shadow-md px-3 py-6 flex justify-between items-center">
      <div className="flex flex-row items-center justify-center">
        <motion.div
          whileTap={{
            opacity: 0.7,
            scale: 0.6,
          }}
        >
          <AiOutlineMenu
            onClick={() => {
              setNavi(true);
            }}
            size={35}
            className="mx-2 mr-4 "
          />
        </motion.div>
        <h1 className="text-[1.6rem] font-[600]">Sneakers</h1>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="flex">
          <motion.div
            whileTap={{
              opacity: 0.7,
              scale: 0.6,
            }}
          >
            <AiOutlineShoppingCart
              
              onClick={() => {
                setModal(!modal);
                
              }}
              size={30}
              className="animate-bounce mx-4 cursor-pointer"
            />
          </motion.div>

          {items > 0 && (
            <span className="-translate-x-6 -translate-y-3 bg-orange-500 text-center flex items-center justify-center text-white font-[500] h-[26px] w-[26px] rounded-full">
              {items}
            </span>
          )}
        </div>
        <img className="h-10 w-10 animate-pulse" src={img} alt="" />
      </div>
    </div>
  );
}

export default Nav

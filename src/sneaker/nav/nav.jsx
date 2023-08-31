import React from 'react'
import menu from '../../assets/icon-menu.svg'
import cart from "../../assets/icon-cart.svg";
import {motion,useAnimation} from 'framer-motion'
import { useGlobal } from '../../context';
import img from '/images/image-avatar.png'
function Nav({control}) 
{
  const { items, setItems, modal, setModal, navigation, setNavi } = useGlobal();
  return (
    <div className="bg-white shadow-md px-3 py-6 flex justify-between items-center">
      <div className="flex flex-row items-center justify-center">
        <motion.div
          whileTap={{
            opacity: 0.7,
            scale: 0.6,
          }}
        >
        
          <img
            src={menu}
            onClick={() => {
              setNavi(true);
            }}
            className="mx-2 h-5 w-6 mr-4 "
            alt=""
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
            onClick={() => {
              setModal(!modal);
            }}
          >
            <img src={cart} className="mx-2 h-7 w-8 mr-4 " alt="" />
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

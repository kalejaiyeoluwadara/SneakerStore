import React from 'react'
import del from '../../assets/icon-delete.svg'
import { motion, useAnimate } from "framer-motion";
import { useGlobal } from '../../context';
import img1 from "/images/image-product-1.jpg";
const Modal = () =>{
    const price = 125.00;
    const { items, setItems,setModal} = useGlobal();
    return (
      <motion.div className="h-[250px] w-[90%] absolute top-[20%] z-10 left-[5%] bg-white rounded-xl shadow-xl">
        <div className="flex px-2 py-2 border-b-2 border-b-gray-200">
          <h1 className="text-start font-bold">Cart</h1>
        </div>

        {items <= 0 ? (
          <div className="h-[100%] bg-red flex items-center justify-center">
            <p className="font-[500] -translate-y-4">Your Cart is empty</p>
          </div>
        ) : (
          <div className=" h-[70%] ">
            <div className="flex h-[80%] flex-1 gap-2 px-4 justify-between items-center">
              <img src={img1} className="h-[70px] w-[60px] rounded-md" alt="" />
              <div>
                <h1>Fall Limited Edition Sneakers</h1>
                <h3>
                  <span>
                    ${price}.00 x {items}
                  </span>
                  <span className="font-bold"> ${price * items}.00</span>
                </h3>
              </div>
              <motion.div
                whileTap={{
                  scale: 0.6,
                }}
              >
                <img
                  src={del}
                  onClick={() => {
                    setItems(0);
                  }}
                  style={{
                    color:"red"
                  }}
                  className="text-gray-900 h-8 cursor-pointer"
                  alt=""
                />
              </motion.div>
            </div>
            <motion.button
              whileTap={{
                opacity: 0.6,
              }}
              className="bg-orange-500 mx-4 w-[90%] h-[40px] text-white font-[600] rounded-md "
              onClick={() => setModal(false)}
            >
              checkOut
            </motion.button>
          </div>
        )}
      </motion.div>
    );
}

export default Modal

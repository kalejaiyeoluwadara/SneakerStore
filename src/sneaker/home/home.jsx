import React,{useState} from 'react'
import { motion } from "framer-motion";

function Home({items,setItems}) {
  const [local,setLocal] = useState(0)
  return (
    <div className="px-4 mt-4">
      <h3 className="text-orange-600  font-[500]  text-[22px] mb-2 text-start">
        SNEAKER COMPANY
      </h3>
      <h1 className="font-[600] leading-tight text-[30px] mb-1 text-start">
        Fall Limited Edition
      </h1>
      <h1 className="font-[600]  leading-tight text-[30px] mb-6 text-start">
        Sneakers
      </h1>
      <p className="text-start mb-6">
        These low edition sneakers are your perfect casual wear companion.
        Featurable a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="flex justify-between">
        <div className="flex">
          <h1 className="mr-4 font-[600] text-[30px]">$125.00</h1>
          <span className="bg-orange-200 h-10 font-[600] text-orange-500 px-2 flex items-center rounded-md">
            50%
          </span>
        </div>
        <div className="line-through opacity-[0.6]">$250.00</div>
      </div>

      <div className="flex justify-between px-6 pt-6 mb-4 items-center">
        <motion.p
          whileTap={{
            scale: 0.9,
          }}
          className="text-[20px] text-orange-600 cursor-pointer hover:bg-orange-200 rounded-full px-4 py-2 font-bold"
          onClick={() => {
            {
              local > 0 && setLocal(local - 1);
            }
          }}
        >
          -
        </motion.p>
        <p className="font-bold text-black text-[30px] cursor-pointer ">{local}</p>
        <motion.p
          whileTap={{
            scale: 0.9,
          }}
          className="text-[20px] text-orange-600 cursor-pointer hover:bg-orange-200 rounded-full px-4 py-2 font-bold"
          onClick={() => {
            setLocal(local + 1);
          
          }}
        >
          +
        </motion.p>
      </div>

      <motion.button
        whileTap={{
          scale: 0.9,
          opacity:0.7
        }}
        onClick={()=>{
          
          setItems(local)
          setLocal(0)
        }}

        className="w-[100%] bg-orange-500 rounded-md  mb-8 text-white text-[20px] py-2 text-center "
      >
        Add to cart
      </motion.button>
    </div>
  );
}

export default Home

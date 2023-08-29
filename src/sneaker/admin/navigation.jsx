import React from 'react'

function Navigation({ navigation, setNavi }) {
  return (
    <div className="w-screen flex absolute z-10">
      <div className="w-[50%] bg-white h-screen flex flex-col pl-6 pt-2 items-start">
        <div
          className="mb-8 text-[40px] font-[500] cursor-pointer text-gray-700 "
          onClick={() => setNavi(false)}
        >
          <p>x</p>
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
    </div>
  );
}

export default Navigation

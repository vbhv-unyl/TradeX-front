import React from 'react'
import { FcBullish } from "react-icons/fc";

const Top = () => {
  return (
    <div className='bg-black flex'>
        <div className='flex ml-5 items-center gap-2 px-1 py-3'>
            <FcBullish fontSize={50} />
            <span className='text-neutral-100 mt-2 ml-2 text-4xl text-white'>TradeX</span>
        </div>
    </div>
  )
}

export default Top

import React from 'react'
import { MdOutlineAttachMoney } from "react-icons/md";

const Info = () => {
    return (
        <div className='flex flex-col'>
            <div className='border border-black border-opacity-200 bg-neutral-100'>
                <h3 className='ml-1'>Highest Price :</h3>
                <div className='flex flex-row'>
                    <MdOutlineAttachMoney fontSize={30}/>
                    <span className='text-2xl'>25</span>
                </div>
            </div>

            <div className='border border-black border-opacity-200 bg-neutral-100'>
                <h3 className='ml-1'>Lowest Price :</h3>
                <div className='flex flex-row'>
                    <MdOutlineAttachMoney fontSize={30}/>
                    <span className='text-2xl'>25</span>
                </div>
            </div>

            <div className='border border-black border-opacity-200 bg-neutral-100'>
                <h3 className='ml-1'>Current Price :</h3>
                <div className='flex flex-row'>
                    <MdOutlineAttachMoney fontSize={30}/>
                    <span className='text-2xl'>25</span>
                </div>
            </div>
        </div>
    )
}

export default Info

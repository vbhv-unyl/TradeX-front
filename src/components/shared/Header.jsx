import React from 'react'
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi'

// import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

export default function Header() {
  return (
    <div className='bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200'>
      <div className='relative'>
        <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3'/>
        <input type='text' placeholder='Search' className='text-sm focus:outline-none active:outline-none h-10 w-[60rem] border border-gray-300 rounded-lg  pl-10 pr-10'/>
      </div>
      <div className='flex items-center gap-2 mr-2'>
      </div>
    </div>
  )
}


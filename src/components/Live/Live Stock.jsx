import React from 'react'
import Top from './Top';
import Graph from './Graph';
import Info from './Info';

const LiveStock = ({ stock }) => {
  return (
    <div className='flex flex-col'>
      <Top className='flex-1' />
      <div className='border-b border-neutral-900 h-screen'>
        <div class="flex space-between">
          <div class="flex-1 basis-3/4 border border-neutral-700">
            <Graph />
          </div>
          <div class="flex-1 basis-1/4">
            <Info />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveStock;

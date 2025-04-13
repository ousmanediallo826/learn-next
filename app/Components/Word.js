import React from 'react'
import { GlobeDemo } from './GlobeDemo'
import { ContainerTextFlipDemo } from './ContainerTextFlipDemo'

const Word = () => {
  return (
    <div className='space-y-8 md:space-y-0 md:space-x-8 flex flex-col md:flex-row items-center'>
      <div className="h-[600px] w-full md:w-1/2 flex items-center justify-center">
        <ContainerTextFlipDemo />
      </div>
      <div className="h-[600px] w-full md:w-1/2">
        <GlobeDemo />
      </div>
    </div>
  )
}

export default Word

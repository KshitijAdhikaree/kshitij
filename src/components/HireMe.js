import Link from 'next/link'
import React from 'react'
import {Circle} from '../components/Icons'


const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:hidden'>
      <div className='w-48 h-auto flex items-center justify-center relative md:w-24'>
        <Circle className='fill-dark  dark:fill-light scale-75 animate-pulse '/>
        <Link
          href='mailto:adhikareekshitij@gmail.com'
          className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent text-dark dark:text-light
          shadow-md border border-solid  w-24 h-24 rounded-full font-semibold  hover:bg-dark hover:text-light
             dark:hover:bg-light dark:hover:text-dark md:w-12 md:h-12 md:text-[10px]'
        >
          Connect
        </Link>
      </div>
    </div>
  )
}

export default HireMe

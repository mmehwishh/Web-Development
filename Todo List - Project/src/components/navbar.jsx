import React from 'react'

const navbar = () => {
  return (
    <div>
      <nav className='bg-purple-800 text-white h-12 flex items-center justify-between p-4'>
        <span className='font-bold text-2xl'>iTask</span>
        <ul className='flex font-bold gap-x-8 '>
            <li className='hover:cursor-pointer hover:text-2xl hover:transition-all '>Home</li>
            <li className='hover:cursor-pointer hover:text-2xl hover:transition-all '>Your Tasks</li>
        </ul>
      </nav>
    </div>
  )
}

export default navbar

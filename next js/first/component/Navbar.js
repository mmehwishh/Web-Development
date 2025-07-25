import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='bg-slate-700 text-white'>
      <ul className='flex items-center justify-center gap-6 list-none p-4'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/About"><li>About</li></Link>
        <Link href="/Contact"><li>Contact</li></Link>
      </ul>
    </div>
  )
}

export default Navbar

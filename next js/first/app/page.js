"use client"
import React from 'react'
import Image from 'next/image'
const page = () => {
  const handleClick = async () => {
    const ddata = { name: 'Mehwish', message: 'Hello' }
  const res = await fetch('/api/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ddata),
  });

  const data = await res.json();
  console.log(data);
};
  return (
    <div className='bg-slate-500 min-h-screen'>
      {/* <Image className='mx-auto p-5' src="https://i.ytimg.com/vi/xZJcJ6QRvfY/maxresdefault.jpg" width={300} height={300} priority alt="" /> */}
      <p className='text-xl font bold'>API </p>
      <button onClick={handleClick}>Click Me</button>
    </div>

  )
}

export default page

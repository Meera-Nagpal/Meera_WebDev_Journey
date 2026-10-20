import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-700 text-white'>
        <div className="logo">
            <span className='font-bold text-xl mx-9' my-2>itask</span>
            </div>
      <ul className="flex-gap-8 mx-9">
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>Task</li>
        <li>Home</li>
      </ul>
    </nav>
  )
}

export default Navbar

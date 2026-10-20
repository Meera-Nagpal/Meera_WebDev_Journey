import React from 'react'

const Navbar = () => {
  return (
    <nav className="  text-xl flex gap-89 mt-0 pt-0 flex justify-center bg-slate-900 text-white w-full h-[130px] text">Hey I am Navbar
      <div className="logo">
        <span className="font-bold">iTask </span>
         </div>
      < ul className='flex gap-8 justify-between'>
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Options</li>
        <li className='cursor-pointer hover:font-bold transition-all'>About</li>
       
      </ul >
    </nav >
  )
}

export default Navbar

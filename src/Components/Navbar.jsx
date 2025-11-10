import React from 'react'
import { FaFireAlt } from "react-icons/fa";


const Navbar = () => {
    const link = (
        <>
        <li>About</li>
        <li>Shop</li>
        <li>Mega Menu</li>
        <li>Vendors</li>
        <li>Blog</li>
        <li>Pages</li>
        <li>Contact</li>
        </>
    )
    return (
        <>
           <div className="navbar shadow-xs">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
        {link}
      </ul>
    </div>

    <div className="flex items-center gap-2">
      <img src="/public/logo.png" alt="logo" className="h-10 w-auto block" />
      <div className='text-left'>
     <p className='text-2xl text-[#3BB77E]'>Nest</p>
      <p className='text-xs'>MART & GROCERY</p>
      </div>

      <div className='flex items-center gap-1'>
        <FaFireAlt className='text-[#3BB77E]' />
        <p>Hot Deals</p>
      </div>
    </div>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="flex gap-7 sm:items-end">
      {link}
    </ul>
  </div>

  <div className="navbar-end">
    <a className="btn bg-[#3BB77E] text-white text-xl">Login</a>
  </div>
</div>

        </>
    )
}

export default Navbar

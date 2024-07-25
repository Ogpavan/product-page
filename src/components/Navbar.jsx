import React from 'react'
import { GrMenu } from 'react-icons/gr'

function Navbar() {
  return (
    <div className=''>
        <h1 className="sm:text-[14px] text-[10px]  bg-black/90 text-white open-sans-light text-center p-2">
        A no hassle way to owning a computer, because it is no longer optional
      </h1>
        <div className='flex justify-between py-5 md:px-10 px-6 items-center shadow-lg '>
            <img src='https://static.wixstatic.com/media/445a44_717d0872ce6e4e67886e8e8c1504be4c~mv2.png/v1/fill/w_330,h_134,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Laptop_first_raw-removebg-preview.png' className='md:w-56 w-36'/>
            <div className='hidden md:block'>
            <ul className='flex gap-5 open-sans-semibold text-xl'>
                <li className='underline'>Home</li>
                <li>Shop</li>
                <li>Blog</li>
                <li>Support</li>
                <li>Contact</li>
            </ul>
            </div>
            <div className='md:hidden'>
            <GrMenu  className='text-3xl'/>
            </div>
        </div>
    <p className='md:ml-20 ml-10 py-10'>Home \ Product</p>
    </div>
  )
}

export default Navbar
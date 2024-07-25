import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col md:flex-row gap-y-10 justify-between py-5 px-4 md:px-20 bg-slate-100 mt-20'>
        <div>
            <img src='https://static.wixstatic.com/media/445a44_717d0872ce6e4e67886e8e8c1504be4c~mv2.png/v1/fill/w_397,h_166,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Laptop_first_raw-removebg-preview.png' className='w-56'/>

            
            <p>Copyright 2022. All Rights Reserved</p>
        </div>
        <div className='open-sans-medium text-lg text-gray-800'>
            <p>Why Subscribe</p>
            <p>Home</p>
            <p>Shop</p>
            <p>Blog</p>
            <p>About Us</p>
            <p>contact</p>
        </div>
        <div className='open-sans-medium text-lg text-gray-800'>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Refunds and cancellations</p>
            <p>Shipping and delivery policy</p>
            
        </div>
    </div>
  )
}

export default Footer
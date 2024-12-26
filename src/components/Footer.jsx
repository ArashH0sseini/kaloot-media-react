import React from 'react'
import Copyright from './Copyright'

const Footer = () => {
  return (
    <div className='px-4 space-y-2'>
        <div className='text-white text-sm flex items-center space-x-4 space-x-reverse'>
            <span>شماره تماس:</span>
            <a className='text-white text-xs' href="tel:+989132962399"><span>09132962399</span></a>
        </div>
        <div className='text-white text-sm flex items-center'>
            <span>آدرس استودیو کلوت: کرمان، بلوار پزشک، خیابان بیهقی، کوچه 4</span>
        </div>
        <div className='text-white text-sm flex items-center'>
            <span>پست الکترونیکی: Kalootmultimedia@gmail.com</span>
        </div>

        <div>
        <Copyright />
        </div>

    </div>
  )
}

export default Footer
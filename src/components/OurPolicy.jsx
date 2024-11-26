import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex justify-center sm:flex-row gap-12 sm:gap-2 text-center py-20 text-xs sm:text-base text-gray-700 class="policy-div"'>
        <div class="policy">
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Easy Exchange Polisy</p>
            <p className='text-gray-400'>We offer hussle free exchange polidy</p>
        </div>  
        <div class="policy">
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>7 days return policy</p>
            <p className='text-gray-400'>We offer hussle free exchange polidy</p>
        </div>  
        <div class="policy">
            <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>24 Hour support</p>
            <p className='text-gray-400'>We offer hussle free exchange polidy</p>
        </div>  
    </div>
  )
}

export default OurPolicy
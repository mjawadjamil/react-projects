import React from 'react'
import ChooseUssvg from './svgs/ChooseUssvg'
import ChooseUS from './images/ChooseUs.png'
import Card1 from './images/Card1.jfif'
import Card2 from './images/Card2.jfif'

function ChooseUs() {
    return (
        <div>
            <div className='bg-white px-32 flex justify-between pt-24'>
                <div className='w-452 h-455 mt-6'>
                    <h1 className='text-48 text-txtclr font-poppins font-semibold  '>Why Choose Us?</h1>
                    <p className='text-18 text-txtclr font-poppins mt-6'>Our team consists of experienced master trainers, certified product genius and professional project managers who have set themselves the goal of successfully marketing your brand and conveying your values.
                    </p>

                    <p className='text-18 text-txtclr font-poppins mt-6 leading-normal'>
                        The professional master trainers from our team train the Mobile Product Genius internally twice a year on the product range, brand, customer treatment.
                    </p>

                    <button className='bg-btnclr rounded-full w-263 h-63 text-white text-18 flex items-center justify-center mt-6'>Get in touch
                        <div className='pl-1 w-7 h-7'>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 7.5L6 18.5" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M11 6.63153C11 6.63153 16.6335 6.15664 17.4885 7.01155C18.3434 7.86647 17.8684 13.5 17.8684 13.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>


                    </button>
                </div>
                <div className=''>
                    <img src={ChooseUS} alt="" className='w-549 h-511 mb-12' />
                </div>
            </div>


            {/* Cards */}

            <div className='flex flex-col items-center mb-20'>
                <div className='w-253 h-70 flex border border-white shadow-black shadow-lg rounded-lg p-2 mb-1'>
                    <img src={Card1} alt="" className='rounded-full w-12 h-12 object-cover' />
                    <div>
                        <div className='flex items-center'>
                            <p className='pl-4 pt-1 text-14 text-black font-semibold font-poppins'>Manual</p>
                            <ChooseUssvg />
                            <ChooseUssvg />
                            <ChooseUssvg />
                            <ChooseUssvg />
                            <ChooseUssvg />
                        </div>

                        <div className='flex items-center'>
                            <p className='pl-4 pt-1 text-9 text-gray-500 font-semibold font-poppins'>Tax Advisor</p>
                            <p className='pl-5 pt-2 text-9 text-gray-500 font-semibold font-poppins'>500/Day</p>
                        </div>

                    </div>
                </div>

                <div className='w-253 h-70 flex border border-white shadow-black shadow-lg rounded-lg p-2'>
                    <img src={Card2} alt="" className='rounded-full w-12 h-12 object-cover' />
                    <div>
                        <div className='flex items-center'>
                        <p className='pl-4 pt-1 text-14 text-black font-semibold font-poppins'>Manual</p>
                            <ChooseUssvg />
                            <ChooseUssvg />
                            <ChooseUssvg />
                            <ChooseUssvg />
                            <ChooseUssvg />
                        </div>
                        <div className='flex items-center'>
                            <p className='pl-4 pt-1 text-9 text-gray-500 font-semibold font-poppins'>Tax Advisor</p>
                            <p className='pl-5 pt-2 text-9 text-gray-500 font-semibold font-poppins'>500/Day</p>
                        </div>

                    </div>
                </div>
            </div>


        </div>



    )
}

export default ChooseUs

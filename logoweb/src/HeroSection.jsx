import React from 'react'
import Herosvg from './svgs/herosvg'

function HeroSection() {
    return (
        <div className='bg-bgFirst'>
            {/* <div className='w-1440 h-652 relative'>
        <svg width="530" height="652" viewBox="0 0 530 652" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.1">
                    <path opacity="0.6" d="M16.1897 -69.4915L174.536 -163.978L175.738 -23.4837L16.3302 70.8943L16.1897 -69.4915Z" stroke="#006FFF" stroke-width="4" />
                    <path opacity="0.7" d="M71.9185 5.2287L387.712 -185.046L455.662 18.9335L72.0609 247.916L71.9185 5.2287Z" stroke="#006FFF" stroke-width="4" />
                    <path opacity="0.7" d="M-21.6877 157.207L286.521 -35.5211L286.521 194.8L-21.5635 386.308L-21.6877 157.207Z" stroke="#006FFF" stroke-width="4" />
                    <path opacity="0.7" d="M-166.025 393.906L119.891 221.555L119.891 431.448L-165.901 602.58L-166.025 393.906Z" stroke="#006FFF" stroke-width="4" />
                </g>
            </svg>
        </div> */}

            <div className='px-32 flex justify-between pt-24'>
                <div className='w-508 h-389 mt-16'>
                    <h1 className='text-txtclr font-poppins font-semibold text-60 leading-tight tracking-tight'>DIGITAL PRODUCT ENGINEERING</h1>

                    <p className='text-txtclr text-24 font-poppins mt-6 leading-tight'>Stand out with an impressive resume
                        connect with top companies, and gain
                        valuable insights for your professional
                        journey</p>

                    <button className='bg-btnclr rounded-full w-263 h-63 text-white text-18 flex items-center justify-center mt-8'>Get Started
                        <div className='pl-1 w-7 h-7'>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 7.5L6 18.5" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M11 6.63153C11 6.63153 16.6335 6.15664 17.4885 7.01155C18.3434 7.86647 17.8684 13.5 17.8684 13.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>


                    </button>
                </div>
                <div className='w-456 h-499 mb-10'>
                    <Herosvg className='w-456 h-499' />
                </div>

            </div>

        </div>
    )
}

export default HeroSection

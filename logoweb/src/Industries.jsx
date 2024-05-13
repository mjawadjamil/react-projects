import React from 'react'
import IndustrySVG from './svgs/IndustrySVG'
import IndustryArrowSVG from './svgs/IndustryArrowSVG'


function Industries() {
    const carddata = [
        { heading: 'Financial Banking', subheading: 'Unlocking the power of Innovative Digital Solutions in Banking and Financial Services.' },
        { heading: 'Communication, Media and Entertainment', subheading: 'Helping C&M clients achieve business goals through technology' },
        { heading: 'Energy, Oil & Gas and Utilities', subheading: 'Leveraging technology to help Energy companies achieve security.' },
        { heading: 'HealthCare & Insurance', subheading: 'Unlocking the power of Innovative Digital Solutions in Banking and Financial Services.' },
        { heading: 'Retail & CPG', subheading: 'Unlocking the power of Innovative Digital Solutions in Banking and Financial Services.' },
        { heading: 'Hi - Tech', subheading: 'Unlocking the power of Innovative Digital Solutions in Banking and Financial Services.' },
        { heading: 'Automotive Manufacturing', subheading: 'Unlocking the power of Innovative Digital Solutions in Banking and Financial Services.' },
        { heading: 'Travel & Transportation and Hospitality', subheading: 'Unlocking the power of Innovative Digital Solutions.' },
    ]

    // const carddata2 = [
    //     { heading: 'Retail & CPG', subheading: 'Unlocking the power of Innovative Digital Solutions in Banking and Financial Services.' },
    //     { heading: 'Hi - Tech', subheading: 'Unlocking the power of Innovative Digital Solutions in Banking and Financial Services.' },
    //     { heading: 'Automotive Manufacturing', subheading: 'Unlocking the power of Innovative Digital Solutions in Banking and Financial Services.' },
    //     { heading: 'Travel & Transportation and Hospitality', subheading: 'Unlocking the power of Innovative Digital Solutions.' },
    // ]
    return (

        <div className='bg-white sm:p-16 p-0 sm:mt-0 mt-6'>
            <div className='sm:flex sm:justify-center'>
                <h1 className='sm:text-48 text-[32px] text-txtclr font-poppins font-semibold '>Industries we work with</h1>
            </div>

            {/* Cards For Industries we work with */}
            {/* md:flex md:flex-col md:items-center md:space-y-4 */}
            {/* <div className=' sm:flex sm:flex-row sm:space-x-8 sm:space-y-8 space-y-4 sm:mt-8 mt-8 px-16'> */}
            <div className='sm:grid sm:grid-cols-4 sm:gap-x-16 sm:gap-y-4 mt-8 px-16'>
                {carddata.map((cd, index) => (
                    <div className='w-274 border border-[#F2F3F6] p-4' key={index} >
                        <IndustrySVG />
                        <p className='text-18 text-txtclr font-poppins font-semibold pt-2'>{cd.heading}</p>
                        <p className='text-12 text-txtclr font-poppins font-sm pt-2'>{cd.subheading}</p>
                        <div className='flex items-center pt-4'>
                            <p className='text-14 text-txtclr font-poppins font-semibold pr-2'>Learn More</p>
                            <IndustryArrowSVG />
                        </div>
                    </div>
                ))
                }
            </div>



        </div >
    );
}

export default Industries

import React from 'react'
// import { FaRegMessage } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";


function Topbar() {
    return (
        // 
        <div className='flex sm:justify-between sm:items-center sm:py-4 sm:px-32 bg-gray-900 sm:flex-row flex-col'>
            <div className='flex sm:flex-row flex-col justify-center  sm:ml-0 ml-16'>
                <div className='flex lg:mr-8 sm:mt-0 mt-2'>
                    <CiLocationOn size={25} className='text-blue-700' />
                    <p className='text-white'>24 Olive Street, Prairie, NY 53590</p>
                </div>
                <div className='flex sm:mt-0 mt-2 sm:ml-0 ml-6'>
                    <CiMail size={25} className='text-blue-700' />
                    <p className='text-white '>WhiteCollar@gmail.com</p>
                </div>
            </div>


            <div className='sm:flex sm:ml-0 sm:mt-0 sm:mb-0 flex ml-[130px] mt-2 mb-4'>
                <FaFacebook size={20} className='text-white sm:mr-4 mr-4' />
                <FaInstagram size={20} className='text-white sm:mr-4 mr-4' />
                <CiTwitter size={20} className='text-white sm:mr-4 mr-4' />
                <FaPinterest size={20} className='text-white sm:mr-4 mr-4' />
            </div>
        </div>
    )
}

export default Topbar

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
        <div className='flex justify-between items-center bg-gray-900 py-4 px-32'>
            <div className='flex'>
                <div className='flex mr-8'>
                    <CiLocationOn size={25} className='text-blue-700' />
                    <p className='text-white'>24 Olive Street, Prairie, NY 53590</p>
                </div>
                <div className='flex'>
                    <CiMail size={25} className='text-blue-700' />
                    <p className='text-white'>WhiteCollar@gmail.com</p>
                </div>
            </div>


            <div className='flex'>
                <FaFacebook size={20} className='text-white mr-4' />
                <FaInstagram size={20} className='text-white mr-4' />
                <CiTwitter size={20} className='text-white mr-4' />
                <FaPinterest size={20} className='text-white mr-4' />
            </div>
        </div>
    )
}

export default Topbar

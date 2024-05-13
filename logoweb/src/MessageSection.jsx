import React from 'react'
import Message from './images/MessageSection.jfif'

function MessageSection() {
  return (
    <div className='flex sm:flex-row flex-col bg-bgFirst sm:px-32 sm:relative py-16'>
      <div className='sm:relative'>
        <img src={Message} alt="" className='sm:w-697 sm:h-687 w-[600px] sm:rounded-bl-[60px] object-cover ' />
      </div>
      <div className='sm:absolute sm:right-16 bg-white sm:w-653 sm:h-688 px-16 sm:mr-16 py-8 sm:rounded-tl-[60px]'>
        <h1 className='sm:text-36 text-[20px] text-txtclr font-poppins font-semibold mb-4'>Connect With Your<br /> Next Great Hire Today!</h1>
        <form action="">
          <div className='sm:mb-6 mb-3 flex flex-col'>
            <label htmlFor="" className=' text-18 text-txtclr font-poppins font-semibold'>Your Name</label>
            <input type="text" className='py-4 px-1 rounded-md bg-bgFirst outline-none' />
          </div>

          <div className='sm:mb-6 mb-3 flex flex-col'>
            <label htmlFor="" className=' text-18 text-txtclr font-poppins font-semibold'>Email</label>
            <input type="text" className='py-4 px-1 rounded-md bg-bgFirst outline-none' />
          </div>

          <div className='sm:mb-6 mb-5 flex flex-col'>
            <label htmlFor="" className=' text-18 text-txtclr font-poppins font-semibold'>Message</label>
            <textarea rows={5} className='px-1 rounded-md bg-bgFirst outline-none' />
          </div>

          <button className='flex items-center justify-center p-4 rounded-full sm:text-18 text-white font-poppins font-sm bg-btnclr sm:w-508 w-[270px]'>
            Send Message
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 7L6.5 18" stroke="white" stroke-width="1.5" stroke-linecap="round" />
              <path d="M11.5 6.13153C11.5 6.13153 17.1335 5.65664 17.9885 6.51155C18.8434 7.36647 18.3684 13 18.3684 13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </button>
        </form>
      </div>
    </div>
  )
}

export default MessageSection

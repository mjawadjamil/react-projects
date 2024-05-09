import React from 'react'
import Message from './images/MessageSection.jfif'

function MessageSection() {
  return (
    <div className='flex bg-bgFirst px-32 relative  py-16'>
      <div className='relative'>
        <img src={Message} alt="" className='w-697 h-687 rounded-bl-[60px] object-cover ' />
      </div>
      <div className='absolute right-16 bg-white w-653 h-688 px-16 mr-16 py-8 rounded-tl-[60px]'>
        <h1 className='text-36 text-txtclr font-poppins font-semibold mb-4'>Connect With Your<br /> Next Great Hire Today!</h1>
        <form action="">
          <div className='mb-6'>
          <label htmlFor="" className=' text-18 text-txtclr font-poppins font-semibold'>Your Name</label>
          <input type="text" className=' w-508 h-60 rounded-md bg-bgFirst' />
          </div>

          <div className='mb-6'>
          <label htmlFor="" className=' text-18 text-txtclr font-poppins font-semibold'>Email</label>
          <input type="text" className=' w-508 h-60 rounded-md bg-bgFirst' />
          </div>

          <div className='mb-6'>
          <label htmlFor="" className=' text-18 text-txtclr font-poppins font-semibold'>Message</label>
          <input type="text" className=' w-508 h-144 rounded-md bg-bgFirst' />
          </div>

          <button className='flex items-center justify-center p-4 rounded-full text-18 text-white font-poppins font-sm bg-btnclr w-508'>
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

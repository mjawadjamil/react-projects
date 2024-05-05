import React from 'react'
import { VscSearch } from "react-icons/vsc";

function Navbar() {
    const NavbarItems = [
        { id: 1, title: 'Service' },
        { id: 2, title: 'Industries' },
        { id: 3, title: 'Partnership' },
        { id: 4, title: 'Careers' },
        { id: 5, title: 'Company' }
    ];
    return (
        <div className='flex justify-between items-center py-4 px-32 bg-white'>
            <div>
                <h1 className='text-txtclr text-2xl font-poppins font-bold'>Logo</h1>
            </div>

            <div className='flex items-center'>
                {
                    NavbarItems.map(navitem => (
                        <a key={navitem.id} className='flex items-center pr-6'>{navitem.title}
                            <div className='mt-1 ml-1'>
                                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L6 6L11 1" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>


                        </a>

                    ))

                }

                {/* <p className='pr-10'>Service</p>
        <p className='pr-10'>Industries</p>
        <p className='pr-10'>Partnership</p>
        <p className='pr-10'>Careers</p>
        <p className='pr-10'>Company</p> */}
                <div className='border-l h-full border-black pr-10'></div>
                <div className='relative'>
                    <input type="text" className=' py-2 px-2 pl-10 pr-2 rounded-full bg-sky-100 placeholder-btnclr w-150 h-45' placeholder='Search' />
                    <VscSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-btnclr h-5 w-5' />
                </div>
            </div>
        </div>
    )
}

export default Navbar


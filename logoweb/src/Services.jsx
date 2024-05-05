import React from 'react'

function Services() {
    return (
        // Dont Forget to remove Margin Botton. Only added for test
        <div className='bg-bgFirst px-32 py-12'>
            <h1 className='text-txtclr text-48 font-poppins font-semibold'>Our Service Offering</h1>
            <div className='flex justify-between space-x-4 mt-12'>
                <p className='w-304 h-60 border border-black text-18 text-txtclr font-poppins font-semibold flex justify-center items-center bg-white rounded-full hover:text-white hover:bg-btnclr hover:border-transparent'>Digital Application Services</p>
                <p className='w-199 h-60 border border-black text-18 text-txtclr font-poppins font-semibold flex justify-center items-center bg-white rounded-full hover:text-white hover:bg-btnclr hover:border-transparent'>UI/XM Services</p>
                <p className='w-314 h-60 border border-black text-18 text-txtclr font-poppins font-semibold flex justify-center items-center bg-white rounded-full hover:text-white hover:bg-btnclr hover:border-transparent'>Quality Engineering Services</p>
                <p className='w-342 h-60 border border-black text-18 text-txtclr font-poppins font-semibold flex justify-center items-center bg-white rounded-full hover:text-white hover:bg-btnclr hover:border-transparent'>Enterprise Content Managment</p>
            </div>
            <div className='bg-white p-4 mt-12'>
                <p className='text-18 text-black font-poppins font-md'>The fast-evolving digital world demands organizational efficiency and agility which is often impeded by legacy applications
                    or application estate which has not been optimized for change. Most organizations have realized that leaner operations and
                    higher profitability are possible by ensuring that their applications are in line with their transformation plans. And for this
                    transformation to take place, IT is critical.<br />
                    Innova’s digital application services empower organizations to optimize their day-to-day operations and adapt their
                    applications to support changing customer demands. Our right-fit application management approach combined with lean
                    techniques enables a high degree of customization and helps implement new models rapidly and seamlessly. Drawing from
                    our deep industry and technology expertise, we provide highly scalable and comprehensive digital.</p>
            </div>
        </div>
    )
}

export default Services

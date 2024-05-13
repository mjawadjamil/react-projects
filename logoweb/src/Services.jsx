import React, { useState } from 'react'


function Services() {

    const [activebtn, setactivebtn] = useState(null);

    const handleClick = (buttonid) => {
        if (activebtn !== buttonid) { 
            // Only update if the button id is different
            setactivebtn(buttonid);
        }
    };

    const getbuttonStyle = (buttonid) => {
        if (buttonid === activebtn) {
            return { backgroundColor: '#006FFF', color: '#FFFFFF' };
        } else {
            return { backgroundColor: '#FFFFFF', color: '#333333' };
        }
    }


    return (
        // Dont Forget to remove Margin Botton. Only added for test
        //  hover:text-white hover:bg-btnclr hover:border-transparent
        <div className='bg-bgFirst sm:px-32 sm:py-12'>
            <h1 className='text-txtclr sm:text-48 text-[38px] font-poppins font-semibold'>Our Service Offering</h1>
            <div className='flex justify-between space-x-4 sm:mt-12 mt-8 sm:pb-0 pb-4 sm:overflow-hidden overflow-auto'>
                <button onClick={() => handleClick(1)} style={getbuttonStyle(1)} className='sm:w-304 sm:h-60 w-[304] h-[60px] border border-black sm:text-18 text-[14px] text-txtclr font-poppins font-semibold flex justify-center items-center bg-white sm:rounded-full rounded-full '>Digital Application Services</button>
                <button onClick={() => handleClick(2)} style={getbuttonStyle(2)} className='sm:w-199 sm:h-60 w-[199] h-[60px] border border-black sm:text-18 text-[14px] text-txtclr font-poppins font-semibold flex justify-center items-center bg-white sm:rounded-full rounded-full'>UI/XM Services</button>
                <button onClick={() => handleClick(3)} style={getbuttonStyle(3)} className='sm:w-314 sm:h-60 w-[314px] h-[60px] border border-black sm:text-18 text-[14px] text-txtclr font-poppins font-semibold flex justify-center items-center bg-white sm:rounded-full rounded-full'>Quality Engineering Services</button>
                <button onClick={() => handleClick(4)} style={getbuttonStyle(4)} className='sm:w-342 sm:h-60 w-[342px] h-[60px] border border-black sm:text-18 text-[14px] text-txtclr font-poppins font-semibold flex justify-center items-center bg-white sm:rounded-full rounded-full'>Enterprise Content Managment</button>
            </div>
            <div className='bg-white sm:p-4 p-2 sm:mt-12'>
                {activebtn === 1 && (<p className='text-18 text-black font-poppins font-md'>The <b>Digital Application Services</b> fast-evolving digital world demands organizational efficiency and agility which is often impeded by legacy applications
                    or application estate which has not been optimized for change. Most organizations have realized that leaner operations and
                    higher profitability are possible by ensuring that their applications are in line with their transformation plans. And for this
                    transformation to take place, IT is critical.<br />
                    Innova’s digital application services empower organizations to optimize their day-to-day operations and adapt their
                    applications to support changing customer demands. Our right-fit application management approach combined with lean
                    techniques enables a high degree of customization and helps implement new models rapidly and seamlessly. Drawing from
                    our deep industry and technology expertise, we provide highly scalable and comprehensive digital.</p>)}

                {activebtn === 2 && (<p className='text-18 text-black font-poppins font-md'>The <b>UI/XM Services</b> fast-evolving digital world demands organizational efficiency and agility which is often impeded by legacy applications
                    or application estate which has not been optimized for change. Most organizations have realized that leaner operations and
                    higher profitability are possible by ensuring that their applications are in line with their transformation plans. And for this
                    transformation to take place, IT is critical.<br />
                    Innova’s digital application services empower organizations to optimize their day-to-day operations and adapt their
                    applications to support changing customer demands. Our right-fit application management approach combined with lean
                    techniques enables a high degree of customization and helps implement new models rapidly and seamlessly. Drawing from
                    our deep industry and technology expertise, we provide highly scalable and comprehensive digital.</p>)}

                {activebtn === 3 && (<p className='text-18 text-black font-poppins font-md'>The <b>Quality Engineering Services</b> fast-evolving digital world demands organizational efficiency and agility which is often impeded by legacy applications
                    or application estate which has not been optimized for change. Most organizations have realized that leaner operations and
                    higher profitability are possible by ensuring that their applications are in line with their transformation plans. And for this
                    transformation to take place, IT is critical.<br />
                    Innova’s digital application services empower organizations to optimize their day-to-day operations and adapt their
                    applications to support changing customer demands. Our right-fit application management approach combined with lean
                    techniques enables a high degree of customization and helps implement new models rapidly and seamlessly. Drawing from
                    our deep industry and technology expertise, we provide highly scalable and comprehensive digital.</p>)}

                {activebtn === 4 && (<p className='text-18 text-black font-poppins font-md'>The <b>Enterprise Content Managment</b> fast-evolving digital world demands organizational efficiency and agility which is often impeded by legacy applications
                    or application estate which has not been optimized for change. Most organizations have realized that leaner operations and
                    higher profitability are possible by ensuring that their applications are in line with their transformation plans. And for this
                    transformation to take place, IT is critical.<br />
                    Innova’s digital application services empower organizations to optimize their day-to-day operations and adapt their
                    applications to support changing customer demands. Our right-fit application management approach combined with lean
                    techniques enables a high degree of customization and helps implement new models rapidly and seamlessly. Drawing from
                    our deep industry and technology expertise, we provide highly scalable and comprehensive digital.</p>)}
            </div>
        </div>
    )
}

export default Services

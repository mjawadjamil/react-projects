import React, { useState } from 'react'


function Services() {

    const [activebtn, setactivebtn] = useState(null);

    const handleClick = (buttonid) => {
        if (activebtn !== buttonid) { // Only update if the button id is different
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
        <div className='bg-bgFirst px-32 py-12'>
            <h1 className='text-txtclr text-48 font-poppins font-semibold'>Our Service Offering</h1>
            <div className='flex justify-between space-x-4 mt-12'>
                <button onClick={() => handleClick(1)} style={getbuttonStyle(1)} className='w-304 h-60 border border-black text-18 text-txtclr font-poppins font-semibold flex justify-center items-center bg-white rounded-full'>Digital Application Services</button>
                <button onClick={() => handleClick(2)} style={getbuttonStyle(2)} className='w-199 h-60 border border-black text-18 text-txtclr font-poppins font-semibold flex justify-center items-center bg-white rounded-full'>UI/XM Services</button>
                <button onClick={() => handleClick(3)} style={getbuttonStyle(3)} className='w-314 h-60 border border-black text-18 text-txtclr font-poppins font-semibold flex justify-center items-center bg-white rounded-full'>Quality Engineering Services</button>
                <button onClick={() => handleClick(4)} style={getbuttonStyle(4)} className='w-342 h-60 border border-black text-18 text-txtclr font-poppins font-semibold flex justify-center items-center bg-white rounded-full'>Enterprise Content Managment</button>
            </div>
            <div className='bg-white sm:p-4 sm:mt-12'>
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

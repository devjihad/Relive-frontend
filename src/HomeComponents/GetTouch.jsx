import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const GetTouch = () => {
    return (
        <div>
           <div className='text-center my-10'>
             <h1 className='text-3xl md:text-5xl'>Get in <span className='text-mint-500'>Touch</span></h1>
            <p>We're here to help you start your wellness journey.</p>
           </div>
            
           <div className='flex flex-col items-center gap-10 md:flex-row md:justify-center'>
             <div>
                <form className='bg-white flex flex-col items-center px-5 py-7 gap-3 w-[350px] rounded-xl'>
                    <h1 className='text-2xl'>Send message</h1>
                    <input type="text" placeholder='Name' className='border-2 rounded-lg px-3 py-1 w-[320px]' />
                    <input type="email" placeholder='Email' className='border-2 rounded-lg px-3 py-1 w-[320px]'/>
                    <input type="number" placeholder='Phone Number' className='border-2 rounded-lg px-3 py-1 w-[320px]'/>
                    <textarea placeholder='Type message here' className='h-[120px] w-[320px] border-2 p-2 rounded-xl '></textarea>
                    <button className='bg-mint-500 w-[120px] py-2 rounded-2xl hover:text-white my-2 text-sm'>Send Now</button>
                </form>
            </div>
            <div className='bg-white flex flex-col  px-5 py-7 gap-3 w-[350px] rounded-xl'>
                <h1 className='text-2xl'>Contact Information</h1>
                <h1 className='flex items-center gap-2 text-xl'><FaLocationDot className='text-mint-500'/> Our Location</h1>
                <p className='text-sm pl-7'>123 Wellness Avenue, Suite 200 Dubai, UAE</p>
                <h1 className='flex items-center gap-2 text-xl'><FaPhoneAlt className='text-mint-500'/>Phone</h1>
                <p className='text-sm pl-7'>01306561609</p>
                <h1 className='flex items-center gap-2 text-xl'><MdEmail className='text-mint-500'/>Email</h1>
                <p className='text-sm pl-7'>mdhajihad609@gmail.com</p>
                <h1 className='text-xl'>Business Hours</h1>
                <p>Monday - Friday: 9:00 AM - 7:00 PM <br />Saturday: 10:00 AM - 4:00 PM <br />Sunday: Closed</p>
            </div>
           </div>
        </div>
    );
};

export default GetTouch;
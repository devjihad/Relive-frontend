import React from 'react';
import tret1 from '../assets/tret 1.png'
import tret2 from '../assets/tret2.png'
import tret3 from '../assets/tret 3.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router';

const Treatment = () => {
    return (
        <div className=' py-10 -px-56'>
            <div className='text-center'>
                <h1 className='text-2xl md:text-5xl'>Our Specialized <span className='text-mint-500'>Treatments</span></h1>
                <p>Explore our wide range of innovative anti-aging solutions.</p>
            </div>

            <div className='flex flex-col items-center md:flex md:flex-row gap-7 justify-center my-10'>
                <div className='w-[300px] px-3 py-5 bg-blue-50 rounded-2xl shadow-2xl shadow-blue-200'> 
                    <img src={tret1} alt="" />
                    <h1 className='font-semibold'>Peptide Therapy</h1>
                    <p className='text-sm'>Boost cellular regeneration <br /> and vitality.</p>
                    <Link className='flex items-center gap-2 text-blue-500 text-sm'>Learn more <FaLongArrowAltRight/></Link>
                </div>
                <div className='px-3 py-5 bg-blue-50 rounded-2xl w-[300px] shadow-2xl shadow-blue-200'>
                    <img src={tret2} alt="" />
                    <h1 className='font-semibold'>Hormone Replacement</h1>
                    <p className='text-sm'>Restore balance, energy,<br /> and well-being.</p>
                    <Link className='flex items-center gap-2 text-blue-500 text-sm'>Learn more <FaLongArrowAltRight/></Link>
                </div>
                <div className='px-3 py-5 bg-blue-50 rounded-2xl w-[300px] shadow-2xl shadow-blue-200'>
                    <img src={tret3} alt="" />
                    <h1 className='font-semibold'>Skin Rejuvenation</h1>
                    <p className='text-sm'> Advanced treatments for <br /> youthful skin.</p>
                    <Link className='flex items-center gap-2 text-blue-500 text-sm'>Learn more <FaLongArrowAltRight/></Link>
                </div>
            </div>
        </div>
    );
};

export default Treatment;
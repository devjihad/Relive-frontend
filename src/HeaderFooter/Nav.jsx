import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png'
import { FiAlignJustify } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { useState } from 'react';

const Nav = () => {
    const [dyna,setdyna]=useState(true)
    const dynamic =()=>{
        setdyna(!dyna)
    }
    return (
        // BIG device
        <div>
        <div className=' hidden  md:flex justify-between items-center max-w-6xl mx-auto py-5 px-10 bg-slate-900 text-white'>
            <img src={logo} className='h-[40px] w-[170px]' height={'70px'} width={'70px'} alt="" />

            
             

                <div className='list-none  md:flex gap-5 '>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/service'}>Service</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>
                
            </div>

            <div>
                <Link to={'/login'} className=' shadow-2xl shadow-cyan-900 px-7 py-1.5 rounded-xl text-xl hover:bg-slate-600 hover:text-white hover:border-0'>Login</Link>
            </div>
            </div>
            {/* Smoll device */}
            <div className='md:hidden bg-slate-900  flex justify-between items-center px-10 py-5 '>
            <img src={logo} className='sm:h-[50px] sm:w-[150px] h-[50px] w-[150px]' height={'70px'} width={'70px'} alt="" />
            <div onClick={dynamic} className='text-2xl'>
                {
                    dyna?<FiAlignJustify className='text-white'/>:<ImCross className='text-white'/>
                }
            </div>
            </div>
            <div className={`md:hidden  bg-gray-300 rounded-b-xl py-7    text-center ${dyna? 'hidden':''}`}>
                 <div className='list-none flex gap-2 flex-col items-center pb-7'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/service'}>Service</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>
            </div>

            <div>
                <button className=' shadow-2xl shadow-cyan-900 px-7 py-1.5 rounded-xl text-xl hover:bg-slate-600  hover:text-white hover:border-0'>Login</button>
            </div>
                
            </div>

            </div>
            
            
        
    );
};

export default Nav;
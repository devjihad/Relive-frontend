import React, { useContext } from 'react';
import { Link, Links } from 'react-router';
import { authcontext } from '../Provider/Privider';
import { toast, ToastContainer } from 'react-toastify';

const Signup = () => {
    const {signUp}=useContext(authcontext)
    const signup=(e)=>{
        e.preventDefault()
        const main =e.target
        const email =main.email.value
        const password=main.pass.value
        signUp(email,password)
        .then((result)=>{
            console.log(result)
            toast('User Create Successfully')
        })
        .catch((err)=>{
            console.log(err)
            toast.error('Something went worng please try again later')
        })
        // console.log(email,password)
    }

    return (
        <div>
            
            <div className='flex justify-center h-screen items-center '>
                
                <form onSubmit={signup} className='flex flex-col px-3 w-[330px] md:w-2/5 md:px-6 bg-gray-300 py-6 rounded-xl'>
                    <h1 className='text-3xl pb-4 text-center'>Sign-up Now</h1>
                    <input type="text" placeholder='enter username' className='border-2 border-black w-full py-1 rounded-xl px-3 mb-3 outline-0'/>
                    <input type="email" name='email' placeholder='enter your email' className='border-2 border-black w-full py-1 rounded-xl px-3 mb-3  outline-0'/>
                    <input type="text" placeholder='enter Image URL' className='border-2 border-black w-full py-1 rounded-xl px-3 mb-3 outline-0'/>
                    <input type="password" name='pass' placeholder='enter  password' className='border-2 border-black w-full py-1 rounded-xl px-3 outline-0' />
                    <Link className='py-3' to={'/login'}>have an account <span>Login now</span></Link>
                    <div className='text-center'>
                        <button className='mt-5 w-[150px] shadow-2xl shadow-cyan-900 px-7 py-1.5 rounded-xl text-xl hover:bg-black  hover:text-white hover:border-0'>Signup</button>
                    </div>
                </form>
            </div>
             <ToastContainer/>
        </div>
       
    );
};

export default Signup;
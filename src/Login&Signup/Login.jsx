import React, { useContext } from 'react';
import { Link } from 'react-router';
import { authcontext } from '../Provider/Privider';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const {login}= useContext(authcontext)
 

    const loginn=(e)=>{
            e.preventDefault()
            const main =e.target
            const email =main.email.value
            const password=main.pass.value
            login(email,password)
            .then((result)=>{
                console.log(result)
                toast('User login Successfully')
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
                
                <form className='flex flex-col px-3 w-[330px] md:w-2/5 md:px-6 bg-gray-300 py-6 rounded-xl' onSubmit={loginn}>
                    <h1 className='text-3xl pb-4 text-center'>Login Now</h1>
                    <input type="email" name='email' placeholder='enter your email' className='border-2 border-black w-full py-1 rounded-xl px-3 mb-3 outline-0'/>
                    <input type="password" name='pass' placeholder='enter your password' className='border-2 border-black w-full py-1 rounded-xl px-3 outline-0' />
                    <Link className='text-start py-2'>Forgot password</Link>
                    <Link className='pb-3' to={'/signup'}>Don't have account <span>Resister now</span></Link>
                    <div className='text-center'>
                        <button className='w-[150px] shadow-2xl shadow-cyan-900 px-7 py-1.5 rounded-xl text-xl hover:bg-black  hover:text-white hover:border-0'>Login</button>
                    </div>
                </form>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Login;
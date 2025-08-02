import { Link } from 'react-router';
import landing from '../assets/landing.png'

const Landing = () => {
    return (
        <div className="bg-cover bg-center h-screen flex flex-col justify-center text-white" style={{backgroundImage:`url(${landing})`}}>
            <h1 className='text-4xl pl-5 sm:text-6xl sm:pl-10 md:text-7xl md:pl-18 md:leading-24 lg:text-8xl'>Rediscover Youth, <br /> <span className='text-mint-500'>Redefine Life.</span></h1>
            <p className=' pl-5 mt-6 sm:pl-10 md:pl-18'>Embrace a renewed sense of vitality and confidence with <br /> advanced anti-aging therapies. At Relive, we help you unlock <br /> the best version of yourself—inside and out.</p>

        <div className='pl-5 sm:pl-10 md:pl-18 pt-5'>
                    <Link to={'/contact'}><button className='bg-mint-500 w-[200px] py-2 rounded-xl hover:text-white '>Contact us</button></Link>

        </div>       
     </div>
    );
};

export default Landing;
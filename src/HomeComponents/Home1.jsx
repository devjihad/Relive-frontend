import { Link } from 'react-router';
import img1 from '../assets/img-1.png'

const Home1 = () => {
    return (
        <div className='lg:m-20 md:m-5 sm:m-5 md:flex  gap-6'>
            <div>
                <img src={img1} className='h-[250px] w-[300px] m-5  sm:h-[350px] sm:w-[450px] lg:h-[400px] lg:w-[550px] '  alt="" />
            </div>
            <div className='ml-5 flex flex-col justify-center gap-5'>
                <h1 className='text-3xl md:text-6xl '>Meet <span className='text-mint-500'>Relive</span></h1>
                <p>Relive is a premium anti-aging clinic offering advanced,<br /> science-based therapies to support longevity and overall <br /> wellness. We blend cutting-edge medical technology with <br /> personalized care to help you feel your best—at any age.</p>

                 <Link to={'/'}><button className='bg-mint-500 w-[200px] py-2 rounded-xl hover:text-white '>Learn More</button></Link>
            </div>
        </div>
    );
};

export default Home1;
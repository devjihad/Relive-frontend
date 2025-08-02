import img1 from '../assets/about 1.png'
import img2 from '../assets/about 2.png'
import img3 from '../assets/about 3.png'

const About1 = () => {
    return (
        <div className='px-3 md:flex md:px-14 gap-5 mt-10'>
           
             <div className="relative md:w-1/2 h-[450px] md:h-[500px] ">               
                    <img src={img1} className="absolute top-14 left-0 w-48 md:w-60 rounded-lg " alt="" />
                    <img src={img2} className="absolute top-0 left-[170px] md:left-52 z-30 w-40 h-[230px] md:w-48 md:h-[270px]  " alt="" />            
                    <img src={img3} className="absolute bottom-[105px] md:bottom-[123px]  left-10 md:left-16 w-60 z-20 " alt="" />
            </div>
           
            <div className='md:w-1/2'>
                <h1 className='text-4xl mb-10'>About <span className='text-mint-500'> Us</span></h1>
                <p className='text-[12px]'>Where innovation meets wellness.
At Relive, we are dedicated to redefining the way you age. Our clinic combines advanced medical science with personalized care to deliver powerful anti-aging solutions that work from the inside out.
We specialize in:
Peptide Therapy to stimulate collagen and cellular repair
Hormone Replacement to restore balance and vitality
Skin Rejuvenation to enhance your natural glow
Our team of experienced specialists designs customized treatment plans tailored to your unique needs and wellness goals. Whether you're here to feel more energetic, look younger, or boost your confidence, we’re here to guide your transformation.
With Relive, you don’t just slow aging—you take control of it. </p>
                    
            </div>
        </div>
    );
};

export default About1;
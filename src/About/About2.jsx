import img1 from "../assets/about1.png"
import img2 from "../assets/about2.png"
import img3 from "../assets/about3.png"
import img4 from "../assets/about4.png"
const About2 = () => {
    return (
        <div className="mt-13 mb-14 md:mt-0">
            <div className='text-center'>
                <h1 className='text-3xl md:text-4xl'>Our Team</h1>
                <p className='md:px-36 text-[13px]'>Our multidisciplinary team includes licensed medical doctors, clinical researchers, and wellness consultants who specialize in peptide science, endocrinology, and preventative medicine. Each member of the Relive team shares a common goal: to help patients live longer, stronger, and with greater vitality.</p>
            </div>

            <div className="flex flex-col items-center md:flex-row gap-8 md:justify-center mt-10">
                <div className="bg-gray-300 w-[200px] rounded-t-2xl rounded-b-xl">
                    <img src={img1} className="h-[250] w-[200px]" alt="" />
                    <h1 className="py-1 pl-3">Dr. Nadine Al Mansouri</h1>
                    <p className="text-[10px] pl-3 pb-3">Medical Director</p>
                </div>
                <div className="bg-gray-300 w-[200px] rounded-t-2xl rounded-b-xl">
                    <img src={img2} className="h-[250] w-[200px]" alt="" />
                    <h1 className="py-1 pl-3">Dr. Karim El Sayed</h1>
                    <p className="text-[10px] pl-3 pb-3">Clinical Consultant</p>
                </div>
                <div className="bg-gray-300 w-[200px] rounded-t-2xl rounded-b-xl">
                    <img src={img3} className="h-[250] w-[200px]" alt="" />
                    <h1 className="py-1 pl-3">Dr. Lara Haddad</h1>
                    <p className="text-[10px] pl-3 pb-3">Specialist in Functional & Preventative Medicine</p>
                </div>
                <div className="bg-gray-300 w-[200px] rounded-t-2xl rounded-b-xl">
                    <img src={img4} className="h-[250] w-[200px]" alt="" />
                    <h1 className="py-1 pl-3">Nour Al Rawi</h1>
                    <p className="text-[10px] pl-3 pb-3">Clinical Research Coordinator</p>
                </div>
                
            </div>
        </div>
    );
};

export default About2;
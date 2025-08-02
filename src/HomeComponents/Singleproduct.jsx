import React from 'react';
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";


const Singleproduct = ({value}) => {
    console.log(value)
    const {img,title,price,rating}=value
    console.log(img,title,price,rating)
    return (
        <div className='mb-5 shadow-2xl p-2 w-[270px] md:w-[200px] rounded-2xl'>
            <img src={img} className='h-[230px] w-[250px] md:h-[175px] md:w-[190px]' alt="" />
            <h1 className='mb-2'>{title}</h1>
            <div className='flex justify-between'>
                <h1 className='flex items-center'><MdOutlineAttachMoney/>{price}</h1>
                <h1 className='flex items-center'><IoMdStarOutline/>{rating} Rating</h1>
            </div>
           <div className='text-center'>
             <button className='bg-mint-500 w-[120px] py-2 rounded-2xl hover:text-white my-2 text-sm'>Add to Card</button>
           </div>
        </div>
    );
};

export default Singleproduct;
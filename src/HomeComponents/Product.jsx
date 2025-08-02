import React, { useEffect, useState } from 'react';
import Singleproduct from './Singleproduct';

const Product = () => {
    const [product,setproduct]=useState([])
    // console.log(product)
    useEffect(()=>{
        fetch('http://localhost:3000/product')
        .then(req=>req.json())
        .then(data=>setproduct(data))
    },[])
    return (
        <div className='mx-5 my-10 px-5 py-10 bg-blue-50 rounded-2xl shadow-2xl shadow-blue-100'>
            <div className='text-center'>
                <h1 className='text-3xl md:text-5xl font-semibold'>Our <span className='text-mint-500'>Product</span></h1>
                <p>Optimize your results with expertly curated peptide combinations designed to enhance effectiveness <br /> and deliver maximum benefits.</p>
            </div>

            <div className='flex flex-col items-center md:flex md:flex-row gap-7 justify-center my-10'>
                {
                    product.map(user =><Singleproduct value={user} key={user.id}></Singleproduct>)
                }
            </div>
        </div>
    );
};

export default Product;
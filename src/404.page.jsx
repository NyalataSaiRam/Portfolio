import React from 'react';
import Img404 from './assets/404.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Page404 = () => {
    return (
        <div className='h-[600px] flex justify-center items-center flex-col '>
            <p className='text-blue tracking-wider sansita-bold-italic text-6xl mb-6'>404 page not found</p>
            <div className='border-blue border-2 rounded-3xl overflow-hidden' >

                <motion.img
                    className='object-cover h-[350px]  '
                    whileHover={{ scale: 1.05 }} transition={{ duration: .3, ease: "linear" }}
                    src={Img404}
                    alt="404Image" />
            </div>
            <p className='rufina-regular text-xl mt-6'>Go back to <Link className='text-2xl text-blue underline tracking-wider' to='/'>Home</Link> page </p>
        </div>
    );
};

export default Page404;

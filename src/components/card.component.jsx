import React from 'react';
import { motion } from 'framer-motion';


const Card = (props) => {
    const { image, details: { title, description, link } } = props;


    return (

        <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }} transition={{ duration: .3, ease: "linear" }}
            className='w-[400px] h-[350px] p-3 rounded-lg bg-blue bg-opacity-10 backdrop-blur-lg shadow-lg  ' >
            <img className=' rounded-lg' src={image} alt="" />
            <p className='mt-2 text-blue rufina-bold'>{title}</p>
            <p className='mt-2 text-sm rufina-bold'>{description}</p>

            <a href={link} target="_blank" rel="noopener noreferrer" className='border-2 rounded-full text-blue hover:text-blue-dark hover:bg-blue  mt-2 flex justify-center text-[22px] w-[100%]'>visit</a>
        </motion.div >
    );
};

export default Card;

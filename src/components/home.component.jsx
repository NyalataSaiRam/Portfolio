import React from 'react';
import HomeImg from '../assets/homepage.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 1 }}
            className=' ml-20 mr-20 mt-5 hero '>
            <div className='hero-left flex flex-col justify-center'>
                <h1 className='sansita-bold-italic capitalize text-6xl mb-5'>hi, i'm sai ram</h1>
                <h2 className=' sansita-regular-italic text-blue  capitalize mb-5 text-3xl'>web developer</h2>
                <p className='mb-5 text-justify text-xl rufina-regular '>
                    Hello! I'm Sai Ram, a recent graduate with a BTech degree in Computer Science and Engineering. My passion lies in web development, where I enjoy creating dynamic, user-friendly, and visually appealing websites. Throughout my academic journey, I've gained strong skills in various web technologies, including HTML, CSS, JavaScript, and frameworks like React and Node.js. My projects have allowed me to develop comprehensive web applications, honing my abilities in both front-end  and back-end development.
                </p>
                <div className='flex flex-row h-12 btn justify-between items-center' >
                    <Link to='/contact' className='btn-1 text-xl pt-2 pb-2 capitalize  '>hire me</Link>
                    <Link to='/contact' className='btn-2 text-xl pt-2 pb-2 mr-5 capitalize'>let's talk</Link>
                </div>
            </div>
            <div className='hero-right'>
                <img src={HomeImg} alt="image" />
                <span className="home-imgHover"></span>
            </div>
        </motion.div>
    );
};

export default Home;

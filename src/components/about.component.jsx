import React from 'react';
import AboutMeImg from '../assets/aboutme.png';
import SkillsImg from '../assets/skills.png';
import css from '../assets/techs/css.svg';
import git from '../assets/techs/git.svg';
import html from '../assets/techs/html.svg';
import java from '../assets/techs/java.svg';
import javascript from '../assets/techs/javascript.svg';
import mongodb from '../assets/techs/mongodb.svg';
import nodejs from '../assets/techs/nodejs.svg';
import python from '../assets/techs/python.svg';
import reactjs from '../assets/techs/reactjs.svg';
import tailwindcss from '../assets/techs/tailwindcss.svg';
import { motion } from 'framer-motion';


const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 1 }}
        >
            <div className="flex flex-col border-b-2 border-blue/30">

                <div className='text-3xl w-[90%]   flex justify-center p-2 mr-20 ml-20'>
                    <h1 className='text-blue sansita-bold-italic tracking-wider'>About Me</h1>
                </div>
                <div className='flex flex-row mr-20 ml-20'>
                    <div className='w-[15%] h-50 '>
                        <motion.img whileHover={{ scale: 1.2 }} transition={{ duration: .3, ease: "linear" }} src={AboutMeImg} alt="" />
                    </div>
                    <div className='w-[85%] h-50 sansita-regular-italic  p-10 flex items-center text-xl '>Hello! I'm Sai Ram, a recent graduate with a BTech degree in Computer Science and Engineering. I specialize in web development and enjoy creating dynamic, user-friendly, and visually appealing websites.</div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className='text-3xl w-[90%]   flex justify-center p-2 mr-20 ml-20'>
                    <h1 className='text-blue sansita-bold-italic'>Skills and Technologies</h1>
                </div>
                <div className='flex flex-row mr-20 ml-20'>
                    <div className='w-[85%] h-80  sansita-regular-italic  p-10 flex flex-col items-center text-xl justify-between'>
                        <div className='flex flex-row justify-evenly w-[100%]'>
                            <motion.img whileHover={{ rotateY: 360 }}
                                transition={{
                                    duration: 1.5,
                                    ease: "linear",
                                }}
                                style={{ transformStyle: "preserve-3d" }} className='h-20 w-20 filter-blue' src={html} alt="" />
                            <motion.img whileHover={{ rotateY: 360 }}
                                transition={{
                                    duration: 1.5,
                                    ease: "linear",
                                }}
                                style={{ transformStyle: "preserve-3d" }} className='h-20 w-20 filter-blue' src={css} alt="" />
                            <motion.img whileHover={{ rotateY: 360 }}
                                transition={{
                                    duration: 1.5,
                                    ease: "linear",
                                }}
                                style={{ transformStyle: "preserve-3d" }} className='h-20 w-20 filter-blue' src={javascript} alt="" />
                            <motion.img whileHover={{ rotateY: 360 }}
                                transition={{
                                    duration: 1.5,
                                    ease: "linear",
                                }}
                                style={{ transformStyle: "preserve-3d" }} className='h-20 w-20 filter-blue' src={reactjs} alt="" />
                            <motion.img whileHover={{ rotateY: 360 }}
                                transition={{
                                    duration: 1.5,
                                    ease: "linear",
                                }}
                                style={{ transformStyle: "preserve-3d" }} className='h-20 w-20 filter-blue' src={nodejs} alt="" />
                        </div>
                        <div className='flex flex-row justify-evenly w-[100%]'>
                            <motion.img whileHover={{ rotateY: 360 }}
                                transition={{
                                    duration: 1.5,
                                    ease: "linear",
                                }}
                                style={{ transformStyle: "preserve-3d" }} className='h-20 w-20 filter-blue' src={mongodb} alt="" />
                            <motion.img whileHover={{ rotateY: 360 }}
                                transition={{
                                    duration: 1.5,
                                    ease: "linear",
                                }}
                                style={{ transformStyle: "preserve-3d" }} className='h-20 w-20 filter-blue' src={java} alt="" />
                            <motion.img whileHover={{ rotateY: 360 }}
                                transition={{
                                    duration: 1.5,
                                    ease: "linear",
                                }}
                                style={{ transformStyle: "preserve-3d" }} className='h-20 w-20 filter-blue' src={python} alt="" />
                            <motion.img whileHover={{ rotateY: 360 }}
                                transition={{
                                    duration: 1.5,
                                    ease: "linear",
                                }}
                                style={{ transformStyle: "preserve-3d" }} className='h-20 w-20 filter-blue' src={git} alt="" />
                            <motion.img whileHover={{ rotateY: 360 }}
                                transition={{
                                    duration: 1.5,
                                    ease: "linear",
                                }}
                                style={{ transformStyle: "preserve-3d" }} className='h-20 w-20 filter-blue' src={tailwindcss} alt="" />
                        </div>

                    </div>
                    <div className='w-[20%] h-80 '>
                        <motion.img whileHover={{ scale: 1.5 }} transition={{ duration: .3, ease: "linear" }} src={SkillsImg} alt="" />
                    </div>
                </div>
            </div>
        </motion.div >
    );
};

export default About;

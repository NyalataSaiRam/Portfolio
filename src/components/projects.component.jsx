import React from 'react';
import Card from './card.component';
import cloudblog from '../assets/cloudblog.png';
import sparkchat from '../assets/sparkchat.png';
import { motion } from 'framer-motion';
import inotebook from '../assets/inotebook.png';

const Projects = () => {
    const cloudBlogLink = `https://cloudbloggingwebsite.netlify.app/`;
    const sparkChatLink = `https://sparkchat-h1zq.onrender.com/login`;
    const inotebookLink = `https://inotebook-website.netlify.app/`;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 1 }}
        >
            <div className='text-3xl w-[90%]   flex justify-center p-2 mr-20 ml-20'>
                <h1 className='text-blue tracking-wider sansita-bold-italic'>Projects</h1>
            </div>
            <div className=' p-10 h-[600px] flex justify-between items-center'>

                <Card image={cloudblog} details={{
                    title: "CloudBlog", description: `Developed CloudBlog, a MERN (MongoDB, Express.js, React, Node.js) stack web
application for bloggers to create, edit, and publish blog posts.`, link: cloudBlogLink
                }} />
                <Card image={sparkchat} details={{
                    title: "SparkChat", description: `Developed a real-time chat application using React.js, Node.js, and Socket.IO. Users
can sign up, log in, and engage in real-time conversations.`, link: sparkChatLink
                }} />
                <Card image={inotebook} details={{
                    title: " iNotebook", description: `Developed iNotebook, a neumorphic note-taking application allowing users to sign
up, log in securely, and manage notes.`, link: inotebookLink
                }} />
            </div>


        </motion.div>
    );
};

export default Projects;

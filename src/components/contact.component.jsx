import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import contactImg from '../assets/contact.png';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';


const Contact = () => {

    const formElement = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();

        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
        let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password
        //formData
        let form = new FormData(formElement.current);
        let formData = {};

        for (let [ key, value ] of form.entries()) {
            formData[ key ] = value;
        }



        let { user_name, user_email, user_number, user_message } = formData;

        if (user_name) {
            if (user_name.length < 3) {
                return toast.error("Fullname must me atleast 3 letters long");
            }
        }
        if (!user_email.length) {
            return toast.error("Invalid email ID");
        }
        if (!emailRegex.test(user_email)) {
            return toast.error("Invalid Email");
        }
        if (!user_number.length || user_number.length < 10) {
            return toast.error("Invalid Phone Number");
        }
        if (!user_message.length) {
            return toast.error("Message cannot be empty");
        }


        toast.promise(

            emailjs
                .sendForm(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, formElement.current, {
                    publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
                }),

            {
                loading: 'sending...',
                success: 'Message sent 😎',
                error: 'Error Sending Message, Please try again 😥',
            }
        );

        e.target.reset();


    };



    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeIn", duration: 1 }}
                className=' flex flex-row mt-5'
            >
                <div className='bg-blue bg-opacity-10 backdrop-blur-lg shadow-lg rounded-lg text-3xl w-[50%] flex flex-col justify-start p-6 mr-20 ml-20'>
                    <h1 className='text-blue tracking-wider sansita-bold-italic'>contact me</h1>
                    <div className='mt-4'>
                        <form ref={formElement} onSubmit={sendEmail} className='flex flex-col justify-center' >
                            <input required name='user_name' placeholder='Full name' className='mb-5 rounded p-1 text-blue sansita-regular bg-blue/10 pl-3 pr-3' type="text" />
                            <input required name='user_email' placeholder='Email' className='mb-5 rounded p-1 text-blue sansita-regular bg-blue/10 pl-3 pr-3' type="email" />
                            <input required name='user_number' placeholder='Phone No.' className='mb-5 rounded p-1 text-blue sansita-regular bg-blue/10 pl-3 pr-3' type="text" />
                            <textarea required name='user_message' placeholder='Message' className='mb-5 rounded p-1 text-blue sansita-regular bg-blue/10 pl-3 pr-3' rows={6} />

                            <button type='submit' className='btn-1 text-md flex items-center '>Send</button>
                        </form>
                    </div>
                </div>
                <div className=' w-[50%] h-[600px] p-10'>
                    <img src={contactImg} alt="" />
                </div>


            </motion.div>
        </>
    );
};

export default Contact;

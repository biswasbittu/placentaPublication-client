import React from 'react';
import Logo from '../component/Logo/Logo'
import { Link, Outlet } from 'react-router';
import register from "../assets/img/registration.jpeg"
import { GoShieldCheck } from 'react-icons/go';
import { IoBookOutline } from 'react-icons/io5';
import { MdOutlineSupportAgent } from 'react-icons/md';

const Authlayouts = () => {
    return (
        <div className='container mx-auto px-4'>
            <Link to='/'>
            <Logo/>
            </Link>
            <div className='flex flex-col-reverse md:flex-row '>
                <div className='flex-1    '>
                    <Outlet/>
                </div>
                <div className='flex-1  '>
                    <h1 className='text-3xl font-bold'>Join Our Publication</h1>
                    <p>Create an account and start your journey with the best collection of books. 
                        Learn, explore and grow every day.</p>
                        <img className='w-full md:w-3/4' src={register} alt="" />
                        <div className='flex gap-4 my-4'>
                            <div className='flex items-center gap-2'>
                                <div className='bg-green-100 p-2 rounded-full'>
                                    <GoShieldCheck size={24} className='text-green-600' />
                                </div>
                                  <div>
                                    <h1 className='font-semibold'>Secure & Safe</h1>
                                    <p>your data is always protected</p>
                                  </div>
                            </div>
                             <div className='flex items-center md:gap-2'>
                                <div className='bg-green-100 p-2 rounded-full'>
                                    <IoBookOutline size={24} className='text-green-600' />
                                </div>
                                  <div>
                                    <h1 className='font-semibold'>Wide collect</h1>
                                    <p>Thusands of books for you</p>
                                  </div>
                            </div>
                             <div className='flex items-center gap-2'>
                                <div className='bg-green-100 p-2 rounded-full'>
                                    <MdOutlineSupportAgent size={24} className='text-green-600' />
                                </div>
                                  <div>
                                    <h1 className='font-semibold'>24/7 support</h1>
                                    <p>we are here to help you</p>
                                  </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Authlayouts;
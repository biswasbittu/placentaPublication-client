import React from 'react';
import Logo from '../component/Logo/Logo'
import { Outlet } from 'react-router';
import register from "../assets/img/registration.jpeg"

const Authlayouts = () => {
    return (
        <div className='container mx-auto px-4'>
            <Logo/>
            <div className='flex flex-col-reverse md:flex-row '>
                <div className='flex-1    '>
                    <Outlet/>
                </div>
                <div className='flex-1 flex flex-col items-center justify-center '>
                    <h1>Join Our Publication</h1>
                    <p>Create an account and start your journey with the best collection of books. 
                        Learn, explore and grow every day.</p>
                        <img className='w-full md:w-3/4' src={register} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Authlayouts;
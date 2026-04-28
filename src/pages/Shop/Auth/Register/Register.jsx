import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const {createUser}=useAuth()
    const { register, handleSubmit, formState: { errors }, watch, } = useForm();
    const password = watch("password");

    const handleRegister = (data) => {
        const {email,password}=(data);
        // console.log(email,password)
        createUser(email, password)
        .then(result=>console.log(result.user))
        .catch(error=>console.log(error.message))
    };

    return (
        <div>
            <div className="w-full max-w-md md:max-w-xl bg-white rounded-3xl shadow-lg p-8  lg:ml-36">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-800">
                        Create Your Account
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Already have an account?
                        <Link to='/login'>
                        <span className="text-green-600 cursor-pointer ml-1">
                            Login
                        </span>
                        </Link>
                    </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit(handleRegister)}>
                    {/* Full Name */}
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-600"
                            {...register("name", {
                                required: "Full Name is required",
                                pattern: {
                                    value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                                    message: "Only letters and one space allowed",
                                },
                            })}
                        />
                        {/* {errors.name?.type==="required"&&<p className="text-red-600 text-sm mt-1">
                                "Name is required"
                            </p>} */}
                        {errors.name && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-600"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+\.\S+$/,
                                    message: "Invalid email format",
                                },
                            })}
                        />
                        {errors.email && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Create a password"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-600"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters",
                                },
                                pattern: {
                                    value:
                                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
                                    message:
                                        "Need uppercase, lowercase, number & special character",
                                },
                            })}
                        />
                       <div >
                         {errors.password && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                       </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-600"
                            {...register("confirmPassword", {
                                required: "Confirm password is required",
                                validate: (value) =>
                                    value === password || "Passwords do not match",
                            })}
                        />
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-start gap-2">
                        <input type="checkbox" className="checkbox checkbox-success mt-1"
                            {...register("terms", {
                                required: "You must accept Terms & Conditions",
                            })}
                        />
                        <p className="text-sm text-gray-600">
                            I agree to the
                            <span className="text-green-600 cursor-pointer ml-1 ">
                                Terms & Conditions
                            </span>
                        </p>
                       <div className='h-5'>
                         {errors.terms && (
                            <p className="text-red-600 text-sm mt-1 ">
                                {errors.terms.message}
                            </p>
                        )}
                       </div>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition cursor-pointer"
                    >
                        Register
                    </button>

                    {/* Social Buttons */}

                </form>
                <div className="pt-4 flex justify-center gap-4 w-full">
                   <SocialLogin/>
                   
                </div>
            </div>
        </div>
    );
};

export default Register;
import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register,handleSubmit,formState: { errors }, watch, } = useForm();
    const password = watch("password");
    const handleLogin = (data) => {
        console.log(data);
    };
    return (
        <div>
            <div>
            <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8  lg:ml-36">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Welcome to Your Account
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Don't have an account?
                        <span className="text-green-600 cursor-pointer ml-1">
                            register
                        </span>
                    </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit(handleLogin)}>
                    
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
                        {errors.password && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
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

                    

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition cursor-pointer"
                    >
                        LogIn
                    </button>

                    {/* Social Buttons */}

                </form>
                <div className="flex gap-4 pt-4">
                    <button
                        type="button"
                        className="flex-1 border border-gray-300 rounded-xl py-3 hover:bg-gray-50 transition"
                    >
                        Google
                    </button>

                    <button
                        type="button"
                        className="flex-1 border border-gray-300 rounded-xl py-3 hover:bg-gray-50 transition"
                    >
                        Facebook
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;
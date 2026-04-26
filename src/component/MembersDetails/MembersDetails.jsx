import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useLoaderData, useParams } from 'react-router';

const MembersDetails = () => {
    const { id } = useParams()
    const teams = useLoaderData()
    
    const membersDetails = teams.find(t => t.id === parseInt(id))
    console.log(membersDetails)
    const { image, name,skills,bio,about } = membersDetails
     const [activeTab, setActiveTab] = useState("bio");
     const handleMessage=(e)=>{
        e.preventDefault()
        alert('message send succefully')

     }
    return (
        <div className='pt-16 md:pt-24 container mx-auto my-8'>
            <h1 className='text-center text-4xl md:text-6xl '>{name}</h1>
            <div className='flex flex-col md:flex-row justify-between  gap-4  '>

                <div className='flex-1  '>
                    <figure>
                        <div className='flex-1   flex flex-col justify-center items-center gap-4'>
                            <img
                                src={image}
                                className="w-2/3 rounded-lg shadow-2xl"
                            />
                            <h1 className='text-4xl md:text-6xl text-gray-600 '>{name}</h1>
                            <div className='flex gap-12 text-gray-500 items-start justify-start'>
                                <FaFacebookF /> <FaInstagram /> <FaXTwitter /> <FaYoutube />
                            </div>
                        </div>
                    </figure>

                </div>
                <div className='flex-1'>
                    <div className="mt-10">

                        {/* Tabs */}
                        <div className="join shadow-sm  border-gray-300">

                            {/* Bio Button */}
                            <button
                                onClick={() => setActiveTab("bio")}
                                className={`join-item btn rounded-none h-16 px-8 border-0 text-lg ${activeTab === "bio"
                                        ? "bg-green-600 text-white"
                                        : "bg-white text-black"
                                    }`}
                            >
                                Bio
                            </button>

                            {/* Skills Button */}
                            <button
                                onClick={() => setActiveTab("skills")}
                                className={`join-item btn rounded-none h-16 px-8 border-l border-r border-gray-300 text-lg ${activeTab === "skills"
                                        ? "bg-green-600 text-white"
                                        : "bg-white text-black"
                                    }`}
                            >
                                Skills
                            </button>

                            {/* Send Message Button */}
                            <button
                                onClick={() => setActiveTab("message")}
                                className={`join-item btn rounded-none h-16 px-8 border-0 text-lg ${activeTab === "message"
                                        ? "bg-green-600 text-white"
                                        : "bg-white text-black"
                                    }`}
                            >
                                Send Message
                            </button>
                        </div>

                        {/* Content Box */}
                        <div className="border border-gray-300 p-10 bg-white">

                            {/* BIO CONTENT */}
                            {activeTab === "bio" && (
                                <div>
                                    <h2 className="text-2xl font-semibold mb-5">
                                        {bio}
                                    </h2>

                                    {/* <p className="text-gray-600 leading-8">
                                        {member.about}
                                    </p> */}

                                    <h3 className="text-xl font-semibold mt-8 mb-3">
                                        {about}
                                    </h3>

                                    {/* <p className="text-gray-600 leading-8">
                                        {member.bio}
                                    </p> */}
                                </div>
                            )}

                            {/* SKILLS CONTENT */}
                            {activeTab === "skills" && (
                                <div>
                                    <h2 className="text-2xl font-semibold mb-6">
                                        Skills
                                    </h2>

                                    <div className="flex flex-wrap gap-3">
                                        {skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="bg-green-100 text-green-700 px-4 py-2 rounded-full"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* MESSAGE CONTENT */}
                            {activeTab === "message" && (
                                <div>
                                    <h2 className="text-2xl font-semibold mb-6">
                                        Send Message
                                    </h2>

                                    <form className="space-y-4">

                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="input input-bordered w-full"
                                        />

                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="input input-bordered w-full"
                                        />

                                        <textarea
                                            placeholder="Message"
                                            className="textarea textarea-bordered w-full h-32"
                                        />

                                        <button onClick={handleMessage} className="btn bg-green-600 text-white border-0 hover:bg-green-700">
                                            Send
                                        </button>
                                    </form>
                                </div>
                            )}

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MembersDetails;
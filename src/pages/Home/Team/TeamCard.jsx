import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

const TeamCard = ({ members }) => {
    const { name, role, skills, image } = (members)
    return (
        <div>
            <div className="card bg-base-100 w-96  shadow-sm">
                <figure>
                    <img className='h-60'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">
                        {name}

                    </h2>
                    <div className="badge badge-secondary">{role}</div>
                    <div className="card-actions justify-center">
                        {skills.map((skill, idx) => <div key={idx} className="badge badge-outline">{skill}</div>)}



                    </div>
                    <div className="card-actions justify-center space-x-16">
                        <Link to="https://www.facebook.com/"><FaFacebook size={24} /></Link> 
                        <Link to="https://www.twitter.com/"><FaXTwitter size={24} /></Link>
                        <Link to="https://www.instagram.com/"><FaInstagram size={24} /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
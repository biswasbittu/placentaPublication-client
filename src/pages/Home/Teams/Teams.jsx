import React from 'react';
import { Link } from 'react-router';

const Teams = ({ team }) => {
    
    const {id,name,role,image,skills}=team;
    return (
        <div>
            
            <div>
                <div className="card bg-base-300  shadow-sm">
                    <Link to={`members/${id}`} className='tooltip tooltip-bottom tooltip-secondary'  data-tip={`Click More about ${name}`}>
                    <figure className=''>
                        <img
                        className='h-60 lg:h-96 pt-4 rounded-4xl'
                            src={image}
                            alt="Shoes" />
                    </figure>
                    </Link>
                    <div className="card-body  items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p className='text-gray-600 text-xl'>{role}</p>
                        <div className="card-actions ">
                            <div className=''>
                                {skills?.map((skill,idx)=><div key={idx} className=""># {skill}</div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teams;
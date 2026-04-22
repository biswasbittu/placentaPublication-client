import React from 'react';
import TeamCard from './TeamCard';

const Team = ({team}) => {
    
    return (
        <div className='my-4'>
            <p className="text-center">Team Members</p>
            <h1 className='text-4xl md:text-6xl  text-center underline'>Our Team</h1>
            <div className='flex flex-col md:flex-row justify-center items-center p-4 gap-4'>
              {
                team.map(members=><TeamCard key={members.id} members={members}></TeamCard>)
              }
            </div>
        </div>
    );
};

export default Team;
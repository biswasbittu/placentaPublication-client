import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import { useState } from 'react';
import Team from '../Team/Team';


const Home = () => {
    const [team,setTeam]=useState([])

    useEffect(()=>{
        fetch('team.json').then(res=>res.json()).then(data=>setTeam(data))
    },[])
    return (
        <div>
            <div className='pt-16 lg:pt-24'>
                <Banner/>
                <Team team={team}/>
            </div>
        </div>
    );
};

export default Home;

import { useLoaderData } from 'react-router';
import Banner from '../Banner/Banner';
import Teams from '../Teams/Teams';



const Home = () => {

    const teams = useLoaderData();
    console.log(teams)
    
    

    return (
        <div className='pt-16 lg:pt-24'>
            <div className='' >
                <Banner />
                <div className='pt-16 lg:pt-24'>
                    <h1 className='text-center text-4xl md:text-6xl underline my-2'>Our Team</h1>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3  gap-8 p-5 '>
                        {
                            teams.map((team) => <Teams key={team.id} team={team}></Teams>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;
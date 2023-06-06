import React, { useEffect, useState } from 'react';
import './home.css'
import Card from '../components/card/Card';


const Home = () => {
    const [shows, setShows] = useState([])

    useEffect(()=>{
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res => res.json())
        .then(data => setShows(data))
    }, [])

    return (
        <div className='container'>
            {
                shows.map(show =><Card show={show} key={show.id} className='my_card'></Card>)
            }

            


                




        </div>
    );
};

export default Home;
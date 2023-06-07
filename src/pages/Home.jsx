import React, { useContext, useEffect, useState } from 'react';
import './home.css'
import Card from '../components/card/Card';
import { ShowContex } from '../context/ContextProvider';


const Home = () => {
    const {shows} = useContext(ShowContex)

    return (
        <div className='shows'>
            {
                shows.map(aShow =><Card aShow={aShow} key={aShow.show.id} className='my_card'></Card>)
            }
        </div>
    );
};

export default Home;
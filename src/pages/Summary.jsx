import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ContextProvider, { ShowContex } from '../context/ContextProvider';

const Summary = () => {

    //TODO : fix error for missing id
    const {id} = useParams()
    console.log(id);

    const { shows } = useContext(ShowContex)

    const { show } = shows.filter(aShow =>aShow.show.id == id)[0]
    

    return (
        <section className='container'>

            <div className='sm_card'>

                <div>
                    <img className='sm_img' src={show.image.medium} alt="" />
                </div>
                <div className='sm_name_language'>
                    <h1>{show.name}</h1>
                    <div>Duration : {show.weight} minutes</div>
                    <div>Type : {show.type}</div>
                    <div>Language : {show.language}</div>
                    <div>
                        <button className='btn sm_btn'>Boke a Ticket</button>
                    </div>
                </div>

            </div>

            <div>{show.summary}</div>
        </section>
    );
};

export default Summary;
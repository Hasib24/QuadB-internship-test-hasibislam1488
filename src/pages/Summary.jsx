import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ContextProvider, { ShowContex } from '../context/ContextProvider';

const Summary = () => {
    const {id} = useParams()
    console.log(id);

    const { shows } = useContext(ShowContex)

    const { show } = shows.filter(aShow =>aShow.show.id == id)[0]
    

    return (
        <div>
            Show sammary
        </div>
    );
};

export default Summary;
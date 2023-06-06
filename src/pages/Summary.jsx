import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ContextProvider, { ShowContex } from '../context/ContextProvider';

const Summary = () => {
    const param = useParams()
    console.log(param);

    const {shows} = useContext(ShowContex)

    console.log(shows);

    return (
        <div>
            Show sammary
        </div>
    );
};

export default Summary;
import React from 'react';
import { useParams } from 'react-router-dom';

const Summary = () => {
    const param = useParams()
    console.log(param);

    return (
        <div>
            Show sammary
        </div>
    );
};

export default Summary;
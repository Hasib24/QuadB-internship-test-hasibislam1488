import React, { createContext, useEffect, useState } from 'react';


export const ShowContex = createContext(null)

const ContextProvider = ({children}) => {

    
    const [shows, setShows] = useState([])



    useEffect(()=>{
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res => res.json())
        .then(data => setShows(data))
    }, [])


    const context ={
        shows
    }


    return (
        <ShowContex.Provider value={context}>
            {children}
        </ShowContex.Provider>
    );
};

export default ContextProvider;
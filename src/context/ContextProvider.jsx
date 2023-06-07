import React, { createContext, useEffect, useState } from 'react';


export const ShowContex = createContext(null)

const ContextProvider = ({children}) => {

    
    const [shows, setShows] = useState([])
    const [loading, setLoading] = useState(true)



    useEffect(()=>{
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res => res.json())
        .then(data =>{
            
            setShows(data)
            setLoading(null)
        })
    }, [])


    const context ={
        shows,
        loading,
        setLoading
    }


    return (
        <ShowContex.Provider value={context}>
            {children}
        </ShowContex.Provider>
    );
};

export default ContextProvider;
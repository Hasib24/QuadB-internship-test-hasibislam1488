import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';


const Card = ({aShow}) => {
    const { show } = aShow;
    const { name, image, language } = show;


    const navigate = useNavigate()

    const handleClick=(show)=>{
        const id = show.id;
        navigate(`/showsammary/${id}`)
    }

    return (
                <div className='my_card'>
                    <img className='img' src={image.medium} alt="" />
                    <h3>{name} </h3>
                    <div className='my_card_info'>
                        <span>Rating : 5.4</span>                     
                        <button onClick={()=>{handleClick(show)}}  className='btn'>Details</button>
                        
                    </div>
                </div>
    );
};

export default Card;
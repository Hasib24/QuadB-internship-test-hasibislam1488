import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';


const Card = ({show}) => {
    const { name, image, language } = show.show;
    console.log(language);

    const navigate = useNavigate()
    


    const handleClick=(show)=>{
        navigate('/showsammary')
    }

    return (
                <div className='my_card'>
                    <img className='img' src={image.medium} alt="" />
                    <h3>{name} </h3>
                    <div className='my_card_info'>
                        <span>Rating : 5.4</span>                     
                        <button onClick={()=>{handleClick()}}  className='btn'>Details</button>
                        
                    </div>
                </div>
    );
};

export default Card;
import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ShowContex } from '../../context/ContextProvider';
import swal from 'sweetalert';

const Summary = () => {

    //TODO : fix error for missing id
    const {id} = useParams()
    const navigate = useNavigate()
  
    const { shows } = useContext(ShowContex)
    const { show } = shows.filter(aShow =>aShow.show.id == id)[0]


    const handleBookings =()=>{
        let bookings = [show.id];
        const booked = localStorage.getItem('bookedShowsId')
        if(booked){
            let lastBookings = JSON.parse(booked);
            let isAxist = lastBookings.find(aid => aid == show.id)
            if(!isAxist){
                console.log(`not exist`);
                navigate(`/bookings/form/${show.id}`)
            }else{
                // swal("Stop!", "You dlready dooked this show!", "warning");
                swal({
                    title: "Stop !",
                    text: `You dlready dooked ${show.name}!`,
                    icon: "warning",
                    buttons:  ["Cancle", "See Bookings"],
                    dangerMode: true,
                  })
                  .then((confirm) => {
                    if (confirm) {
                      navigate('/bookings')
                    } else {
                      console.log(`cancled`);
                    }
                  });
            }
            return
        }
        navigate(`/bookings/form/${show.id}`)
    }
    

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
                        <button onClick={()=>handleBookings()} className='btn sm_btn'>Book a Ticket</button>
                    </div>
                </div>

            </div>

            <div>{show.summary}</div>
        </section>
    );
};

export default Summary;
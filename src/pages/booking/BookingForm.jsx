import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { ShowContex } from '../../context/ContextProvider';


const BookingForm = () => {

  const navigate = useNavigate()
  const { bookId } = useParams()

  const { shows } = useContext(ShowContex)
  const { show } = shows.filter(aShow =>aShow.show.id == bookId)[0]

  console.log(show)

  const handleSubmit =(e)=>{
    e.preventDefault()



    //copied from Summary.jsx

    const booked = localStorage.getItem('bookedShowsId')
    if(booked){

      let lastBookings = JSON.parse(booked);
      let bookings = [...lastBookings, show.id]
      localStorage.setItem('bookedShowsId', JSON.stringify(bookings))
    }else{
      let bookings = [ show.id]
      localStorage.setItem('bookedShowsId', JSON.stringify(bookings))
    }
    //TODO : tost success
       
    

    //form control

    console.log(`confirm btn clicked`);
    const theForm = e.target;

    const showName = theForm.showName.value;
    const showId = theForm.showId.value;
    const date = theForm.date.value;
    const time = theForm.time.value;
    const userName = theForm.userName.value;
    const email = theForm.email.value;

    const bookigData = {
      showId,
      showName,
      date,
      time,
      userName,
      email
    }

    const lastBookingData = JSON.parse(localStorage.getItem('bookingData'))

    let bookingDataArray = [bookigData]

    if(lastBookingData){


      //sweet alart 
      swal({
        title: "Success !",
        text: `You successfuly booked a tiket for ${show.name}!`,
        icon: "success",
        buttons:  ["Go Home", "See Bookings"],
        dangerMode: true,
      })
      .then((confirm) => {
        if (confirm) {
          theForm.reset()
          navigate('/bookings')
        } else {
          theForm.reset()
          navigate('/')
        }
      });

      //Sroring at local storege
      bookingDataArray = [...lastBookingData, bookigData]
      localStorage.setItem('bookingData', JSON.stringify(bookingDataArray))

    }else{

      localStorage.setItem('bookingData', JSON.stringify(bookingDataArray))

      //sweet alart



    }




  }


    return (
        <div className='container'>
            <h1 className='section_title'>Booking Form</h1>
            <Form onSubmit={(e)=>handleSubmit(e)}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Show Name</Form.Label>
                  <Form.Control type="text" defaultValue={show.name} name='showName' disabled/>

                </Form.Group>

                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Show ID</Form.Label>
                  <Form.Control type="text" defaultValue={show.id} name='showId' disabled/>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" name='date' placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Time [A= AM, P=PM]</Form.Label>
                  <Form.Control type="time" name='time' placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" name='userName' required/>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name='email' required/>
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Confirm Booking
                </Button>
            </Form>
        </div>
    );
};

export default BookingForm;
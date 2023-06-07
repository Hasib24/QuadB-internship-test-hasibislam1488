import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const BookingForm = () => {

  const handleSubmit =(e)=>{
    e.preventDefault()
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

    console.log(bookigData);
  }


    return (
        <div className='container'>
            <h1 className='section_title'>Booking Form</h1>
            <Form onSubmit={(e)=>handleSubmit(e)}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Show Name</Form.Label>
                  <Form.Control type="text" name='showName' disabled/>

                </Form.Group>

                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Show ID</Form.Label>
                  <Form.Control type="text" name='showId' disabled/>

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
import { key } from 'localforage';
import React from 'react';
import BookingRow from './BookingRow';


const Bookings = () => {
    
    const bookings = JSON.parse(localStorage.getItem('bookingData'))
    console.log(bookings);


    return (
        <section className='container'>
            <h1 className='section_title'>My Bookings</h1>
            <div className='table_div'>
                <table className='table'>
                    <tr className='th'>
                        <td className='trh'>Show</td>
                        <td className='trh'>Time</td>
                        <td className='trh'>Name</td>
                        <td className='trh'>Email</td>
                    </tr>
                    {
                        bookings.map(aBooking =><BookingRow aBooking={aBooking} key={aBooking.showId}></BookingRow>)
                    }

                   
                  
                </table>
               
            </div>
        </section>
    );
};

export default Bookings;
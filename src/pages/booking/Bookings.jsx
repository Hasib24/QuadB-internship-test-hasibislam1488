import React from 'react';
import BookingRow from '../booking/BookingRow';


const Bookings = () => {
    
    if(localStorage.getItem('bookingData')){

        const bookings = JSON.parse(localStorage.getItem('bookingData'))

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
    }else{
        return <div className='container'>Not yet booked any show</div>
    }
    



};

export default Bookings;
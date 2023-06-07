import React from 'react';

const BookingRow = ({aBooking}) => {
    const {showName, time, userName, email} = aBooking;
    return (
                <tr className='tr'>
                    <td className='td'>{showName}</td>
                    <td className='td'>{time}</td>
                    <td className='td'>{userName}</td>
                    <td className='td'>{email}</td>
                </tr>
    );
};

export default BookingRow;
import React from 'react';
import moment from 'moment';

import { IBooking } from '../../interfaces/interfaces';
import profilepic from '../../assets/profile-image-example.png';

interface IProps {
  booking: IBooking;
}

function BookingCardComponent({ booking }: IProps) {
  return (
    <div className='card'>
      <img src={profilepic} alt={booking.otherUserFullName} />
      <div className='body'>
        <div className='header'>
          <h3>{booking.otherUserFullName}</h3>
          <p className='duration'>{booking.scheduledDuration} h.</p>
        </div>
        <p className='mt-20'>
          Due on {moment(booking.scheduledStart).format('MMM Do YY')}
        </p>
      </div>
    </div>
  );
}

export default BookingCardComponent;

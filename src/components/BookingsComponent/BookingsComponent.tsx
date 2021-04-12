import React, { useState, useEffect } from 'react';

import './BookingsComponent.scss';
import { IBooking } from '../../interfaces/interfaces';
import BookingCardComponent from './BookingCardComponent';

function BookingsComponent() {
  const [confirmedBookings, setConfirmedBookings] = useState<
    IBooking[] | undefined
  >(undefined);
  const [requestedBookings, setRequestedBookings] = useState<
    IBooking[] | undefined
  >(undefined);

  useEffect(() => {
    const activeBookings = localStorage.getItem('activeBookings');
    if (activeBookings) {
      setConfirmedBookings(JSON.parse(activeBookings)['confirmedBookings']);
      setRequestedBookings(JSON.parse(activeBookings)['requestedBookings']);
    }
  }, []);

  return (
    <div className='bookings'>
      <h2>Bookings</h2>
      <h3 className='ml-20'>Confirmed bookings</h3>
      {confirmedBookings && confirmedBookings?.length > 0 ? (
        confirmedBookings
          ?.sort((a, b) => (a.scheduledDateTime < b.scheduledDateTime ? -1 : 1))
          .map((booking: IBooking) => (
            <BookingCardComponent booking={booking} />
          ))
      ) : (
        <p className='ml-20'>Nothing to see here yet!</p>
      )}
      <h3 className='ml-20'>Requested bookings</h3>
      {requestedBookings && requestedBookings?.length > 0 ? (
        requestedBookings
          ?.sort((a, b) => (a.scheduledDateTime < b.scheduledDateTime ? -1 : 1))
          .map((booking: IBooking) => (
            <BookingCardComponent booking={booking} />
          ))
      ) : (
        <p className='ml-20'>Nothing to see here yet!</p>
      )}
    </div>
  );
}

export default BookingsComponent;

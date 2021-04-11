import React from 'react';
import { Link } from 'react-router-dom';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';

import './BottomBarComponent.scss';

function BottomBarComponent() {
  return (
    <div className='bottombar'>
      <Link to='/'>
        <div className='button'>
          <SearchRoundedIcon className='icon' style={{ fontSize: 30 }} />
          <p>Dashboard</p>
        </div>
      </Link>
      <Link to='/sitters'>
        <div className='button'>
          <PeopleRoundedIcon className='icon' style={{ fontSize: 30 }} />
          <p>Sitters</p>
        </div>
      </Link>

      <Link to='/bookings'>
        <div className='button'>
          <CalendarTodayRoundedIcon className='icon' style={{ fontSize: 30 }} />
          <p>Bookings</p>
        </div>
      </Link>

      <Link to='/profile'>
        <div className='button'>
          <PersonRoundedIcon className='icon' style={{ fontSize: 30 }} />
          <p>Profile</p>
        </div>
      </Link>
    </div>
  );
}

export default BottomBarComponent;

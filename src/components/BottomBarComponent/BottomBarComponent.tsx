import React from 'react';
import { Link } from 'react-router-dom';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';

import './BottomBarComponent.scss';

function BottomBarComponent() {
  return (
    <div className='bottomBar'>
      <Link to='/'>
        <div className='bottomButton'>
          <SearchRoundedIcon className='icon' style={{ fontSize: 30 }} />
          <p>Dashboard</p>
        </div>
      </Link>
      <Link to='/sitters'>
        <div className='bottomButton'>
          <PeopleRoundedIcon className='icon' style={{ fontSize: 30 }} />
          <p>Sitters</p>
        </div>
      </Link>

      <Link to='/bookings'>
        <div className='bottomButton'>
          <CalendarTodayRoundedIcon className='icon' style={{ fontSize: 30 }} />
          <p>Bookings</p>
        </div>
      </Link>

      <Link to='/profile'>
        <div className='bottomButton'>
          <PersonRoundedIcon className='icon' style={{ fontSize: 30 }} />
          <p>Profile</p>
        </div>
      </Link>
    </div>
  );
}

export default BottomBarComponent;

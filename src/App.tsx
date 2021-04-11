import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import BookingsComponent from './components/BookingsComponent/BookingsComponent';
import BottomBarComponent from './components/BottomBarComponent/BottomBarComponent';
import DashboardComponent from './components/DashboardComponent/DashboardComponent';
import ProfileComponent from './components/ProfileComponent/ProfileComponent';
import SittersComponent from './components/SittersComponent/SittersComponent';
import TopBarComponent from './components/TopBarComponent/TopBarComponent';
import {
  getUserData,
  login,
  getLocalUsers,
  getActiveBookings,
} from './service/dataservice';

function App() {
  useEffect(() => {
    (async () => {
      if (!localStorage.getItem('userData')) {
        await login();
        const userData = await getUserData();
        localStorage.setItem('userData', JSON.stringify(userData));
      }
      if (!localStorage.getItem('localUsers')) {
        await login();
        const localUsersData = await getLocalUsers();
        localStorage.setItem('localUsers', JSON.stringify(localUsersData));
      }
      if (!localStorage.getItem('activeBookings')) {
        await login();
        const activeBookingsData = await getActiveBookings();
        localStorage.setItem(
          'activeBookings',
          JSON.stringify(activeBookingsData),
        );
      }
    })();
  }, []);

  return (
    <Router>
      <TopBarComponent />
      <div className='components'>
        <Switch>
          <Route path='/sitters'>
            <SittersComponent />
          </Route>
          <Route path='/bookings'>
            <BookingsComponent />
          </Route>
          <Route path='/profile'>
            <ProfileComponent />
          </Route>
          <Route path='/'>
            <DashboardComponent />
          </Route>
        </Switch>
      </div>
      <BottomBarComponent />
    </Router>
  );
}

export default App;

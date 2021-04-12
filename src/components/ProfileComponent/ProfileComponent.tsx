import React, { useEffect, useState } from 'react';

import './ProfileComponent.scss';
import { IUser } from '../../interfaces/interfaces';
import profilepic from '../../assets/profile-image-example.png';

function Profilecomponent() {
  const [user, setUser] = useState<IUser | undefined>(undefined);

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <div className='profile'>
      <div className='card'>
        <img src={profilepic} alt={user?.fullName} />
        <h2>{user?.fullName}</h2>
        <p>
          {user?.address?.postcode} {user?.address?.town}
        </p>
        <p>{user?.biography}</p>
      </div>
    </div>
  );
}

export default Profilecomponent;

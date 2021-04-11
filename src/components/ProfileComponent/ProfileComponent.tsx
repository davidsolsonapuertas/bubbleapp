import React, { useEffect, useState } from 'react';

import { IUser } from '../../interfaces/interfaces';

function Profilecomponent() {
  const [user, setUser] = useState<IUser | undefined>(undefined);

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return <div>{user?.firstName}</div>;
}

export default Profilecomponent;

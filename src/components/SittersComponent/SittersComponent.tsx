import React, { useEffect, useState } from 'react';
import SitterCardComponent from './SitterCardComponent';

import { IUser } from '../../interfaces/interfaces';
import './SittersComponent.scss';

function SittersComponent() {
  const [sitters, setSitters] = useState<IUser[] | undefined>(undefined);

  useEffect(() => {
    const localUsers = localStorage.getItem('localUsers');
    if (localUsers) {
      setSitters(JSON.parse(localUsers));
    }
  }, []);

  return (
    <div className='sitters'>
      <h2>Sitters near you</h2>
      {sitters &&
        sitters
          ?.sort((a, b) => (a.distanceInKm < b.distanceInKm ? -1 : 1))
          .map(
            (sitter: IUser) =>
              sitter.firstName && <SitterCardComponent sitter={sitter} />,
          )}
    </div>
  );
}

export default SittersComponent;

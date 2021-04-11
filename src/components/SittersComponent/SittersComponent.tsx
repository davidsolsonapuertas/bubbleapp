import React, { useEffect, useState } from 'react';
import { IUser } from '../../interfaces/interfaces';

function SittersComponent() {
  const [sitters, setSitters] = useState<IUser[] | undefined>(undefined);
  console.log('hi');

  useEffect(() => {
    const localUsers = localStorage.getItem('localUsers');
    if (localUsers) {
      setSitters(JSON.parse(localUsers));
    }
  }, []);

  return (
    <div>
      {sitters &&
        sitters?.map(
          (sitter: IUser) => sitter.firstName && <p>{sitter.firstName}</p>,
        )}
    </div>
  );
}

export default SittersComponent;

import React from 'react';

import { IUser } from '../../interfaces/interfaces';
import profilepic from '../../assets/profile-image-example.png';

interface IProps {
  sitter: IUser;
}

function SitterCardComponent({ sitter }: IProps) {
  return (
    <div className='card'>
      <img src={profilepic} alt={sitter.lastName} />
      <div className='body'>
        <div className='header'>
          <h3>{sitter.firstName + ' ' + sitter.lastName}</h3>
          <p className='distance'>{sitter.distanceInKm} km</p>
        </div>
        <p>{sitter.biography}</p>
      </div>
    </div>
  );
}

export default SitterCardComponent;

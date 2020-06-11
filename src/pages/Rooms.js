import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import RoomContainer from '../components/RoomContainer';

/**
 * Rooms
 */
function Rooms() { // eslint-disable-line react/prefer-stateless-function
  return (
    <>
      <Hero hero='roomsHero'>
        <Banner title='our rooms'>
          <Link to='/' className='btn-Primary'>
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
}

export default Rooms;

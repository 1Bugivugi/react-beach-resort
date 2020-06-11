import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';


/**
 * Error
 */
function Error() { // eslint-disable-line react/prefer-stateless-function
  return (
    <Hero>
      <Banner title='404' subtitle='page not found'>
        <Link to='/' className='btn-Primary'>
          return home
        </Link>
      </Banner>
    </Hero>
  );
}

export default Error;

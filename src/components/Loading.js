import React, { Component, PropTypes } from 'react';
import loadingGif from '../images/gif/loading-arrow.gif';

/**
 * Loading
 */
 function Loading()  { // eslint-disable-line react/prefer-stateless-function
  return (
    <div className='loading'>
      <h4>
        rooms data loading...
      </h4>
      <img src={loadingGif} alt=""/>
    </div>
  );
}

export default Loading;

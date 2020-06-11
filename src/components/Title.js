import React, { Component, PropTypes } from 'react';

/**
 * Title
 */
function Title({title}) { // eslint-disable-line react/prefer-stateless-function
  return (
    <div className='section-title'>
      <h4>
        {title}
      </h4>
      <div />
    </div>
  );
}

export default Title;

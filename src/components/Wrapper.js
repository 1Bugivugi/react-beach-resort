import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Rooms from '../pages/Rooms';
import SingleRoom from '../pages/SingleRoom';
import Error from '../pages/Error';
import Navbar from './Navbar';

/**
 * ComponentName
 */
class Wrapper extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <> {/* is a shorthand for React.Fragment */}
        <Navbar />
        <Switch> { /* Switch lets default component be rendered when no route matches */ }
          <Route exact path='/' component={Home} /> { /* if '/' go to 'Home', etc */}
          <Route exact path='/rooms' component={Rooms} />
          <Route exact path='/rooms/:slug' component={SingleRoom} /> {/* :bob - route parameter*/}
          <Route component={Error} />
        </Switch>
      </>
    );
  }
}

export default Wrapper;

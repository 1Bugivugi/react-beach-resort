import React, { Component, PropTypes } from 'react';
import logo from '../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

/**
 * Navbar
 */
export class Navbar extends Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    isOpen: false
  }

  handleToggle = () => {
    this.setState({ isOpen:!this.state.isOpen })
  }

  render() {
    return (
      <nav className='navBar'>
        <div className='nav-Center'>
          <div className='nav-Header'>
            <Link to='/'>
              <img src={logo} alt='Beach Resort' />
            </Link>
            <button
              type='button'
              className='nav-Btn'
              onClick={this.handleToggle}
            >
              <FaAlignRight className='nav-Icon' />
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-Links show-nav" : "nav-Links"}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/rooms'>Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

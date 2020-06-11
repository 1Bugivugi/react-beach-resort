import React, { Component, PropTypes } from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

/**
 * Services
 */
export class Services extends Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    services: [
      {
        icon:<FaCocktail />,
        title:'free cocktails',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et.'
      },
      {
        icon:<FaHiking />,
        title:'endless hiking',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et.'
      },
      {
        icon:<FaShuttleVan />,
        title:'free shuttle',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et.'
      },
      {
        icon:<FaBeer />,
        title:'strongest beer',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et.'
      }
    ]
  }
  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className='service'>
              <span>
              {item.icon}
              </span>
              <h6>
              {item.title}
              </h6>
              <p>
              {item.info}
              </p>
              </article>
            )
          }
          )}
        </div>
      </section>
    );
  }
}


export default Services;

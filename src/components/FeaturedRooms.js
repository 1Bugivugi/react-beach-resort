import React, { Component } from 'react';
import {RoomContext} from '../context';
import Title from './Title';
import Loading from './Loading';
import Room from './Room';


/**
 * FeaturedRooms
 */
export class FeaturedRooms extends Component { // eslint-disable-line react/prefer-stateless-function
  static contextType = RoomContext; // won't work in functional component (-> this.context)
  render() {
    let {loading, featuredRooms: rooms} = this.context;
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room}/>
    })
    return (
      <section className='featured-rooms'>
        <Title title='featured rooms' />
        <div className='featured-rooms-center'>
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;

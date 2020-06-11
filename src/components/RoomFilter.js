import React, { Component } from 'react';
import {useContext} from 'react'; // is used because it's a functional component
import {RoomContext} from '../context';
import Title from './Title';

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))] // get unique type of the room for selector
}

function RoomFilter({rooms})  {
  const context = useContext(RoomContext);
  const {handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets} = context;
  // get unique types
  let types = getUnique(rooms, 'type');
  // add all
  types = ['all', ...types];
  // map to jsx
  types = types.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  })

  return (
      <section className='filter-container'>
        <Title title='search rooms' />
        <form className='filter-form'>
          {/* select type */}
          <div className='form-group'>
            <label htmlFor='type'>room type</label>
            <select
              name='type'
              id='type'
              value={type}
              className='form-control'
              onChange={handleChange}
            >
              {types}
            </select>
          </div>
          {/* end select type */}
        </form>
      </section>
  );
}

export default RoomFilter;

import React, { Component, PropTypes } from 'react';
import items from './data';

const RoomContext = React.createContext();
// Provider is responsible for allowing all the comp in comp tree to access it
// Consumer is used to access that info


/**
 * RoomProvider
 */
class RoomProvider extends Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    rooms:[],
    sortedRooms:[],
    featuredRooms:[],
    loading:true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  /*
  * Get data from local DB
  */
  formatData(items){
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let room = {...item.fields, images, id};
      return room;
    });
    return tempItems;
  }

  // getData

  componentDidMount(){
    // this.getData();
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max(...rooms.map(item => item.size));

    this.setState(
      {
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize
      }
    )
  }


  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  }

  handleChange = event => {
    const target = event.target;
    const value = event.type === 'checkbox' ? target.checked : target.value
    const name = event.target.name;
    this.setState({
      [name]:value // we change values for the type
    }, this.filterRooms)
  }

  filterRooms = () => {
    let {rooms, type, capacity, price, minSize, maxSize, breakfast, pets} = this.state;
    let tempRooms = [...rooms];

    if(type !== 'all') {
      tempRooms = tempRooms.filter(room => room.type === type) // will provide only those rooms that match the currennt type
    }
    this.setState({
      sortedRooms: tempRooms
    })
  }


  render() {
    return (
      <RoomContext.Provider value={{...this.state, getRoom: this.getRoom, handleChange: this.handleChange}}> {/* to pass an object you need 2 sets of curly braces*/}
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
      {value => <Component {...props} context={value}/> }
      </RoomConsumer>
    )
  }
}

export { RoomProvider, RoomConsumer, RoomContext };

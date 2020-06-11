import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from './components/Wrapper';
import { BrowserRouter as Router } from 'react-router-dom';
import {RoomProvider} from './context'

function App() {
  return (
    <RoomProvider>
      <Router>
        <Wrapper />
      </Router>
    </RoomProvider>
  );
}

export default App;

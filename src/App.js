import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import components
import Navbar from './components/Navbar';
import Stopwatch from "./components/Stopwatch";
import Countdown from "./components/Countdown";

//stylings
import './styles/App.css'
import './styles/Navbar.css'

class App extends Component {
  state = {
    
  }

  render () {
    return (
      <div className="App">
        <div class="container-fluid" id="container-override">
          <Navbar />
          <Stopwatch />
          <br></br>
          <Countdown />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import components
import Navbar from './components/Navbar';
import Stopwatch from "./components/Stopwatch";
import Countdown from "./components/Countdown";

//stylings
import './App.css';

class App extends Component {
  state = {

  }

  render () {
    return (
      <div className="App">
        <Stopwatch />
        <br></br>
        <Countdown />
      </div>
    );
  }
}

export default App;

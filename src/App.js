import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import components
import Navbar from './components/Navbar';
import Stopwatch from "./components/Stopwatch";
import Countdown from "./components/Countdown";

//stylings
import './App.css';

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    
  }

  render () {
    return (
      <body>
        <div className="App">
          <div class="container-fluid" id="container-override">
            <Navbar />
            <Stopwatch />
            <br></br>
            <Countdown />
          </div>
        </div>

        <script src="/js/jquery.min.js"></script>
        <script src="/js/popper.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
      </body>

    );
  }
}

export default App;

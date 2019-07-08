import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import components
import Navbar from './components/Navbar';
import Timer from "./components/Timer";

//stylings
import './styles/App.css'
import './styles/Navbar.css'
import './styles/Timer.css'

class App extends Component {
  state = {
    
  }

  render () {
    return (
      <div className="App">
        <div class="container-fluid" id="app-container-override">
          <div class="row">
            <div class="col-lg-12">
              <Navbar />
            </div>
          </div>
          <div class="row row-timer d-flex justify-content-center">
            <Timer />
          </div>
          <div class="row">
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;

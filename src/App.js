import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// import components
import Navbar from './components/Navbar/Navbar'
import Timer from './components/Timer/Timer'
import Helper from './components/Helper/Helper'
import Music from './components/Music/Music'

//stylings
import './styles/App.css'
import './styles/Navbar.css'
import './styles/Timer.css'
import './styles/Helper.css'
import './styles/Music.css'

class App extends Component {
  state = {
    
  }

  render () {
    return (
      <div className="App">
        <div className="container-fluid" id="app-container-override">
          <div className="row">
            <div className="col-lg-12">
              <Navbar />
            </div>
          </div>

          <div className="row row-timer d-flex justify-content-center">
            <div className="p2">
              <Helper />
            </div>

            <div className="p2">
              <Timer/>
            </div>

            <div className="p2">
              <div className="d-flex">
                Control Music
              </div>
              <div className="d-flex">
                Music Library
              </div>
            </div>            
          </div>
        </div>
      </div>
    );
  }
}

export default App;

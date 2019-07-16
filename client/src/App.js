import React, { Component } from 'react'
import axios from 'axios'

// import components
import Navbar from './components/Navbar/Navbar'
import Timer from './components/Timer/Timer'
import Helper from './components/Helper/Helper'
import History from './components/History/History'

//stylings
import './styles/App.css'
import './styles/Navbar.css'
import './styles/Timer.css'
import './styles/Helper.css'
import './styles/History.css'

class App extends Component {
  // initialize our state
  state = {
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
  };

  render () {
    return (
      <div className="App">
        <div className="container-fluid" id="app-container-override">
          <div className="row">
            <div className="col-lg-12">
              <Navbar />
            </div>
          </div>

          <div className ="row">
            <div className="col-lg-4">
              <Helper />
            </div>

            <div className="col-lg-4">
              <Timer />
            </div>

            <div className="col-lg-4">
              <History />
            </div>            
          </div>
        </div>
      </div>
    );
  }
}

export default App;

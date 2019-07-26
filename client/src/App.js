import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

// import components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

//stylings
import './styles/App.css';
import './styles/Timer.css';
import './styles/Helper.css';
import './styles/History.css';
import './styles/Auth.css';
import './styles/Navbar.css';

class App extends Component {
  render () {
    return (
      
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="container-fluid" id="app-container-override">
              <div className="row">
                <div className="col-lg-12">
                  <Navbar />
                </div>
              </div>

              <Route exact path="/" component={Home}/>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

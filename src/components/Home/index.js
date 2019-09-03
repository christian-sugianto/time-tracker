import React, { Component } from 'react';
import axios from "axios";

// import components
import Timer from './Timer/Timer';
import Helper from './Helper/Helper';
import History from './History/History';

class Home extends Component {
  render () {
    return (
        <div className="home row">
            <div className="col helper-col" align="center">
                <Helper />
            </div>

            <div className="col timer-col" align="center">
                <Timer />
            </div>

            <div className="col history-col" align="center">
                <History />
            </div>   
        </div>
    );
  }
}

export default Home;

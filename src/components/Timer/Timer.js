import React, { Component } from "react";
import Stopwatch from "./Stopwatch";
import Countdown from "./Countdown";

class Timer extends Component {
    state = {
        isCountdown: false,
    };

    render() {
        return (
            <div className="timer">
                <div className="timer-header d-flex flex-row justify-content-center">
                    {this.state.isCountdown === false && 
                        (<button className="timer-type" style={activeTypeStyle} onClick={this.changeToStopwatch}>Stopwatch</button>)}

                    {this.state.isCountdown === false && 
                        (<button className="timer-type" onClick={this.changeToCountdown}>Countdown</button>)}

                    {this.state.isCountdown === true && 
                        (<button className="timer-type" onClick={this.changeToStopwatch}>Stopwatch</button>)}

                    {this.state.isCountdown === true && 
                        (<button className="timer-type" style={activeTypeStyle} onClick={this.changeToCountdown}>Countdown</button>)}
                </div>
                
                {this.state.isCountdown === false && (<Stopwatch />)}
                {this.state.isCountdown === true && (<Countdown />)}
            </div>
        );
    }

    /* stopWatch */
    changeToStopwatch = () => {
        this.setState( {
            isCountdown: false
        })
    }

    /* countdown */
    changeToCountdown = () => {
        this.setState( {
            isCountdown: true
        })
    }
}

var activeTypeStyle = {
    borderColor: "#FF994E",
    color: "#FF994E"
}

export default Timer;
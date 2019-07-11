import React, { Component } from "react";
import Stopwatch from "./Stopwatch";
import Countdown from "./Countdown";

class TimerBox extends Component {
    state = {
        isCountdown: false,
    };

    render() {
        return (
            <div className="container-fluid" id="timer">
                <div className="Timer-header d-flex flex-row justify-content-center">
                    {this.state.isCountdown === false && 
                        (<button className="Timer-type" style={activeTypeStyle} onClick={this.changeToStopwatch}>Stopwatch</button>)}

                    {this.state.isCountdown === false && 
                        (<button className="Timer-type" onClick={this.changeToCountdown}>Countdown</button>)}

                    {this.state.isCountdown === true && 
                        (<button className="Timer-type" onClick={this.changeToStopwatch}>Stopwatch</button>)}

                    {this.state.isCountdown === true && 
                        (<button className="Timer-type" style={activeTypeStyle} onClick={this.changeToCountdown}>Countdown</button>)}
                </div>
                
                {this.state.isCountdown === false && (<Stopwatch />)}
                {this.state.isCountdown === true && (<Countdown />)}

                <input type="string" className="add-description" placeholder="Add Description (Optional)"/>
                <p className="add-description-text">
                    Everytime timer ends, task and time stamp will <br />
                    be recorded in History 
                </p>
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

export default TimerBox;
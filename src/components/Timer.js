import React, { Component } from "react";
import Stopwatch from "./Stopwatch";
import Countdown from "./Countdown";

class Timer extends Component {
    state = {
        isCountdown: false,
    };

    render() {
        return (
            <div className="container-fluid" id="timer">
                <div classname="row">
                    <div className="Timer-header col-lg-12">
                        {this.state.isCountdown === false && 
                            (<button className="Timer-type" style={activeTypeStyle} onClick={this.changeToStopwatch}>Stopwatch</button>)}

                        {this.state.isCountdown === false && 
                            (<button className="Timer-type" onClick={this.changeToCountdown}>Countdown</button>)}

                        {this.state.isCountdown === true && 
                            (<button className="Timer-type" onClick={this.changeToStopwatch}>Stopwatch</button>)}

                        {this.state.isCountdown === true && 
                            (<button className="Timer-type" style={activeTypeStyle} onClick={this.changeToCountdown}>Countdown</button>)}
                    </div>
                </div>
                
                {this.state.isCountdown === false && (<Stopwatch />)}
                {this.state.isCountdown === true && (<Countdown />)}

                <br></br>
                <input type="string" className="add-description" placeholder="Add Description (Optional)"/>
                <p className="add-description-text">
                    Everytime timer pauses, task and time<br/> 
                    stamp will be recorded in History 
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

export default Timer;
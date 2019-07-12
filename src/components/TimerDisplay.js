import React, { Component } from "react";

class TimerDisplay extends Component {

    render () {
        return(
            <div className="Timer-display d-flex flex-row justify-content-center">
                <div className="time p-2" id="hour">
                    {hours}
                </div>
                <div className="p-2">:</div>
                <div className="time p-2" id="minute">
                    {minutes}
                </div>
                <div className="p-2">:</div>
                <div className="time p-2" id="second">
                    {seconds}
                </div>
            </div>
        );
    }
}

export default TimerDisplay;
                    
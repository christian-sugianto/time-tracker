import React, { Component } from "react";

class Timer extends Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
    };

    render() {
        const { timerTime } = this.state;
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

        return (
        <div className="container" id="timer">
            <div className="Timer-header">
                <button className="Timer-type">Stopwatch</button>
                <div id="Timer-type-divider"></div>
                <button className="Timer-type">Countdown</button>
            </div>

            <div className="Timer-display">
                {hours} : {minutes} : {seconds}
            </div>
            
            <div className="Timer-buttons-container">
                <button className="Timer-button" onClick={this.stopTimer}>Pause</button>
                <div id="Timer-button-divider"></div>
                <button className="Timer-button" onClick={this.startTimer}>Play</button>
                <div id="Timer-button-divider"></div>
                <button className="Timer-button" onClick={this.resetTimer}>Reset</button>
            </div>
        </div>
        );
    }
    
    startTimer = () => {
        if (this.state.timerOn == false) {
            this.setState({
                timerOn: true,
                timerTime: this.state.timerTime,
                timerStart: Date.now() - this.state.timerTime
            });
        
            this.timer = setInterval(() => {
                this.setState({
                    timerTime: Date.now() - this.state.timerStart
                });
            }, 10);
        }
    };
    
    stopTimer = () => {
        this.setState({
            timerOn: false,
        })
        clearInterval(this.timer);
    }

    resetTimer = () => {
        this.setState({
            timerOn: false,
            timerStart: 0,
            timerTime: 0
        })
        clearInterval(this.timer);
    }
}

export default Timer;
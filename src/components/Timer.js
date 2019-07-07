import React, { Component } from "react";

class Timer extends Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0,
        isCountdown: false,
    };

    render() {
        const { timerTime } = this.state;
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

        return (
        <div className="container-fluid" id="timer">
            <div classname="row">
                <div className="Timer-header col-lg-12">
                    <button className="Timer-type">Stopwatch</button>
                    <button className="Timer-type" onClick={this.changeToCountdown}>Countdown</button>
                </div>
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
            <br></br>
            <input type="string" className="add-description" placeholder="Add Description (Optional)"/>
            <p className="add-description-text">
                Every time timer pauses or resets, task and <br/> 
                time stamp will be recorded in History 
            </p>
        </div>
        );
    }

    changeToCountdown = () => {
        this.setState( {
            isCountdown: true
        })
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
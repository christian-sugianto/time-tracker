import React, { Component } from "react";

import { recordStore } from "../../mobx/RecordStore";

class Stopwatch extends Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0,
    };

    // change key press based on key presses
    pressKey = (e) => {

        // start or pause timer when space button is pressed 
        if (e.keyCode === 32 && e.target === document.body) {

            // prevents web from scrolling down
            e.preventDefault();

            if ((this.state.timerOn === false && this.state.timerTime === 0) ||
                (this.state.timerOn === false && this.state.timerTime > 0)) {
                this.startTimer();
            }

            else if (this.state.timerOn === true) {
                this.stopTimer();
            }
        }

        // alt button is pressed
        else if (e.altKey && e.target === document.body && this.state.timerTime > 0) {

            // "alt+r" resets timer
            if (e.keyCode === 82) {
                this.resetTimer();
            }

            // "alt+e ends timer" 
            else if (e.keyCode === 69) {
                this.resetTimer();
            }
        }
    }

    // start timer
    startTimer = () => {
        if (this.state.timerOn === false) {
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
    }

    // stop timer
    stopTimer = () => {
        this.setState({
            timerOn: false,
        })
        clearInterval(this.timer);
    }

    // reset timer
    resetTimer = () => {
        this.setState({
            timerOn: false,
            timerStart: 0,
            timerTime: 0
        })
        clearInterval(this.timer);
    }

    // adds event listener after first render
    componentDidMount() {
        document.addEventListener("keydown", this.pressKey, false);
    }

    // removes event listener to avoid memory leak
    componentWillUnmount() {
        document.removeEventListener("keydown", this.pressKey, false);
    }

    render() {
        const { timerTime } = this.state;
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

        return (
            <div className="Stopwatch">
                <div className="timer-display d-flex flex-row justify-content-center">
                    <div className="time p-2">
                        {hours}
                    </div>
                    <div className="p-2">:</div>
                    <div className="time p-2">
                        {minutes}
                    </div>
                    <div className="p-2">:</div>
                    <div className="time p-2">
                        {seconds}
                    </div>
                </div>

                <div className="timer-buttons d-flex flex-row justify-content-center">
                    {this.state.timerOn === false && this.state.timerTime === 0 &&
                        (<button className="timer-button" onClick={this.startTimer}>Start</button>)}
                    {this.state.timerTime > 0 &&
                        (<button className="timer-button" onClick={this.resetTimer}>End</button>)}
                    {this.state.timerTime > 0 &&
                        (<div id="timer-button-divider"></div>)}
                    {this.state.timerOn === true &&
                        (<button className="timer-button" onClick={this.stopTimer}>Pause</button>)}
                    {this.state.timerOn === false && this.state.timerTime > 0 &&
                        (<button className="timer-button" onClick={this.startTimer}>Resume</button>)}
                    {this.state.timerTime > 0 &&
                        (<div id="timer-button-divider"></div>)}
                    {this.state.timerTime > 0 &&
                        (<button className="timer-button" onClick={this.resetTimer}>Reset</button>)}
                </div>
            </div>
        );
    }
}

export default Stopwatch;
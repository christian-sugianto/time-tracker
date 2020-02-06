import React, { Component } from "react";
import { RecordType, recordStore } from "../../../mobx/RecordStore";
import moment from "moment";
import { mapRecord } from "../../../utils/recordMapper";

class Countdown extends Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0,
        startDate: new Date(),
        rawNumbersEntered: [0, 0, 0, 0, 0, 0],
        numbersEntered: [0, 0, 0, 0, 0, 0],
        lengthOfNumbers: 0
    };

    // change key press based on key presses
    pressKey = (e) => {

        // start or pause timer when space button is pressed 
        if (e.keyCode === 32 && e.target === document.body) {

            // prevents web from scrolling down
            e.preventDefault();

            if (this.state.timerOn === true && this.state.timerTime >= 1000) {
                this.stopTimer();
            }

            else if (this.state.timerOn === false && (this.state.timerStart !== 0 &&
                this.state.timerStart !== this.state.timerTime && this.state.timerTime !== 0)) {
                this.startTimer();
            }
        }

        // alt button is pressed
        else if (e.altKey && e.target === document.body && (this.state.timerOn === false || this.state.timerTime < 1000) &&
            (this.state.timerStart !== this.state.timerTime && this.state.timerStart > 0)) {

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

    // enter input number in countdown
    enterNumber = (number) => {

        // enters first input number
        if (this.state.lengthOfNumbers === 0) {
            this.setState({
                timerTime: number * 1000,
                numbersEntered: [number * 1000, 0, 0, 0, 0],
                rawNumbersEntered: [number, 0, 0, 0, 0, 0],
                lengthOfNumbers: this.state.lengthOfNumbers + 1
            });
        }

        // enters second input number
        if (this.state.lengthOfNumbers === 1) {
            this.setState({
                timerTime: number * 1000 + this.state.numbersEntered[0] * 10,
                numbersEntered: [number * 1000, this.state.numbersEntered[0] * 10, 0, 0, 0, 0],
                rawNumbersEntered: [number, this.state.rawNumbersEntered[0], 0, 0, 0, 0],
                lengthOfNumbers: this.state.lengthOfNumbers + 1
            })
        }

        // enters third input number
        if (this.state.lengthOfNumbers === 2) {
            this.setState({
                timerTime: number * 1000 + this.state.numbersEntered[0] * 10 + this.state.numbersEntered[1] * 6,
                numbersEntered: [number * 1000, this.state.numbersEntered[0] * 10, this.state.numbersEntered[1] * 6, 0, 0, 0],
                rawNumbersEntered: [number, this.state.rawNumbersEntered[0], this.state.rawNumbersEntered[1], 0, 0, 0],
                lengthOfNumbers: this.state.lengthOfNumbers + 1
            })
        }

        // enters fourt input number
        if (this.state.lengthOfNumbers === 3) {
            this.setState({
                timerTime: number * 1000 + this.state.numbersEntered[0] * 10 + this.state.numbersEntered[1] * 6 +
                    this.state.numbersEntered[2] * 10,
                numbersEntered: [number * 1000, this.state.numbersEntered[0] * 10, this.state.numbersEntered[1] * 6,
                this.state.numbersEntered[2] * 10, 0, 0],
                rawNumbersEntered: [number, this.state.rawNumbersEntered[0], this.state.rawNumbersEntered[1],
                    this.state.rawNumbersEntered[2], 0, 0],
                lengthOfNumbers: this.state.lengthOfNumbers + 1
            })
        }

        // enters fifth input number
        if (this.state.lengthOfNumbers === 4) {
            this.setState({
                timerTime: number * 1000 + this.state.numbersEntered[0] * 10 + this.state.numbersEntered[1] * 6 +
                    this.state.numbersEntered[2] * 10 + this.state.numbersEntered[3] * 6,
                numbersEntered: [number * 1000, this.state.numbersEntered[0] * 10, this.state.numbersEntered[1] * 6,
                this.state.numbersEntered[2] * 10, this.state.numbersEntered[3] * 6, 0],
                rawNumbersEntered: [number, this.state.rawNumbersEntered[0], this.state.rawNumbersEntered[1],
                    this.state.rawNumbersEntered[2], this.state.rawNumbersEntered[3], 0],
                lengthOfNumbers: this.state.lengthOfNumbers + 1
            })
        }

        // enters sixth input number
        if (this.state.lengthOfNumbers === 5) {
            this.setState({
                timerTime: number * 1000 + this.state.numbersEntered[0] * 10 + this.state.numbersEntered[1] * 6 +
                    this.state.numbersEntered[2] * 10 + this.state.numbersEntered[3] * 6 + this.state.numbersEntered[4] * 10,
                numbersEntered: [number * 1000, this.state.numbersEntered[0] * 10, this.state.numbersEntered[1] * 6,
                this.state.numbersEntered[2] * 10, this.state.numbersEntered[3] * 6, this.state.numbersEntered[4] * 10],
                rawNumbersEntered: [number, this.state.rawNumbersEntered[0], this.state.rawNumbersEntered[1],
                    this.state.rawNumbersEntered[2], this.state.rawNumbersEntered[3], this.state.rawNumbersEntered[4]],
                lengthOfNumbers: this.state.lengthOfNumbers + 1
            })
        }
    }

    // clear input number
    clearNumbers = () => {
        this.setState({
            timerOn: false,
            timerStart: 0,
            timerTime: 0,
            rawNumbersEntered: [0, 0, 0, 0, 0, 0],
            numbersEntered: [0, 0, 0, 0, 0, 0],
            lengthOfNumbers: 0
        })
    }

    // start timer
    startTimer = () => {
        this.setState({
            startDate: new Date()
        })

        // max time can be input
        if (this.state.timerTime > 360000000) {
            this.setState({
                timerOn: true,
                timerTime: 3600000000,
                timerStart: 3600000000
            })
        }

        else {
            this.setState({
                timerOn: true,
                timerTime: this.state.timerTime,
                timerStart: this.state.timerTime
            });
        }

        // countdown starts
        this.timer = setInterval(() => {
            const newTime = this.state.timerTime - 10;
            if (newTime >= 0) {
                this.setState({
                    timerTime: newTime
                });
            }
            else {
                clearInterval(this.timer);
                this.setState({ timerOn: false });
                alert("Countdown ended");
            }
        }, 10);
    };

    // stops timer
    stopTimer = () => {
        const record = mapRecord(this.props.desc, this.state.startDate);
        recordStore.addRecord(record);

        clearInterval(this.timer);
        this.setState({ timerOn: false });
    };

    // reset timer
    resetTimer = () => {
        this.setState({
            timerOn: false,
            timerStart: 0,
            timerTime: 0,
            rawNumbersEntered: [0, 0, 0, 0, 0, 0],
            numbersEntered: [0, 0, 0, 0, 0, 0],
            lengthOfNumbers: 0
        })
        if (this.state.timerOn) {
            const record = mapRecord(this.props.desc, this.state.startDate);
            recordStore.addRecord(record);
        }
        clearInterval(this.timer);
    };

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
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);

        return (
            <div className="Countdown">
                {(this.state.timerOn === false && this.state.timerStart === 0) && (
                    <div className="timer-display d-flex flex-row justify-content-center">
                        <div className="time p-2" id="hour">
                            {this.state.rawNumbersEntered[5]}
                            {this.state.rawNumbersEntered[4]}
                        </div>
                        <div className="p-2">:</div>
                        <div className="time p-2" id="minute">
                            {this.state.rawNumbersEntered[3]}
                            {this.state.rawNumbersEntered[2]}
                        </div>
                        <div className="p-2">:</div>
                        <div className="time p-2" id="hour">
                            {this.state.rawNumbersEntered[1]}
                            {this.state.rawNumbersEntered[0]}
                        </div>
                    </div>
                )}

                {(this.state.timerOn === true || (this.state.timerOn === false && this.state.timerStart !== 0)) && (
                    <div className="timer-display d-flex flex-row justify-content-center">
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
                )}

                <div className="timer-buttons">
                    {this.state.timerOn === false && this.state.timerStart === 0 && (
                        <div className="timer-input-buttons">
                            <div className="d-flex flex-row justify-content-center">
                                <button className="timer-input-button p-2" onClick={this.enterNumber.bind(this, 0)}> 0 </button>
                                <button className="timer-input-button p-2" onClick={this.enterNumber.bind(this, 1)}> 1 </button>
                                <button className="timer-input-button p-2" onClick={this.enterNumber.bind(this, 2)}> 2 </button>
                                <button className="timer-input-button p-2" onClick={this.enterNumber.bind(this, 3)}> 3 </button>
                                <button className="timer-input-button p-2" onClick={this.enterNumber.bind(this, 4)}> 4 </button>

                                {this.state.timerOn === false && (this.state.timerStart === 0 || this.state.timerTime === this.state.timerStart) && (
                                    <button className="timer-input-button big-timer-input-button p-2" onClick={this.startTimer}> Set </button>
                                )}
                            </div>

                            <div className="d-flex flex-row justify-content-center">
                                <button className="timer-input-button p-2" onClick={this.enterNumber.bind(this, 5)}> 5 </button>
                                {(this.state.numberEntered === 1 || this.state.numberEntered === 3) && (
                                    <div className="disabled-timer-buttons">
                                        <button className="timer-input-button p-2 disabled" onClick={this.enterNumber.bind(this, 6)} disabled> 6 </button>
                                        <button className="timer-input-button p-2 disabled" onClick={this.enterNumber.bind(this, 7)} disabled> 7 </button>
                                        <button className="timer-input-button p-2 disabled" onClick={this.enterNumber.bind(this, 8)} disabled> 8 </button>
                                        <button className="timer-input-button p-2 disabled" onClick={this.enterNumber.bind(this, 9)} disabled> 9 </button>
                                    </div>
                                )}

                                {(this.state.numberEntered !== 1 && this.state.numberEntered !== 3) && (
                                    <div className="normal-timer-buttons">
                                        <button className="timer-input-button p-2" onClick={this.enterNumber.bind(this, 6)}> 6 </button>
                                        <button className="timer-input-button p-2" onClick={this.enterNumber.bind(this, 7)}> 7 </button>
                                        <button className="timer-input-button p-2" onClick={this.enterNumber.bind(this, 8)}> 8 </button>
                                        <button className="timer-input-button p-2" onClick={this.enterNumber.bind(this, 9)}> 9 </button>
                                    </div>
                                )}
                                <button className="timer-input-button big-timer-input-button p-2" onClick={this.clearNumbers}> Clear </button>
                            </div>
                        </div>
                    )}

                    {this.state.timerOn === true && this.state.timerTime >= 1000 &&
                        (<button className="timer-button" onClick={this.stopTimer}>Pause</button>)}
                    {this.state.timerOn === false && (this.state.timerStart !== 0 && this.state.timerStart !== this.state.timerTime && this.state.timerTime !== 0) &&
                        (<button className="timer-button" onClick={this.startTimer}>Resume</button>)}
                    {((this.state.timerOn === false || this.state.timerTime < 1000) && (this.state.timerStart !== this.state.timerTime && this.state.timerStart > 0) ||
                        this.state.timerOn === true && this.state.timerTime >= 1000) &&
                        (<div id="timer-button-divider"></div>)}
                    {((this.state.timerOn === false || this.state.timerTime < 1000) && (this.state.timerStart !== this.state.timerTime && this.state.timerStart > 0) ||
                        this.state.timerOn === true && this.state.timerTime >= 1000) && (<button className="timer-button" onClick={this.resetTimer}>End</button>)}
                </div>
            </div>
        );
    }
}

export default Countdown;
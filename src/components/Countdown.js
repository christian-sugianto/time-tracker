import React, { Component } from "react";

class Countdown extends Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0,
        numberEntered: 0
    };

    render() {
        const { timerTime } = this.state;
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);

        return (
            <div className="Countdown">
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
                
                <div className="Timer-buttons-container">
                    {this.state.timerOn === false && this.state.timerStart === 0 && (
                        <div className="Timer-display-input">
                            <div className="Timer-input d-flex flex-row justify-content-center">
                                <button className="Timer-button timer-input-button p-2" onClick={this.enterNumber.bind(this, 0)}> 0 </button>
                                <button className="Timer-button timer-input-button p-2" onClick={this.enterNumber.bind(this, 1)}> 1 </button>
                                <button className="Timer-button timer-input-button p-2" onClick={this.enterNumber.bind(this, 2)}> 2 </button>
                                <button className="Timer-button timer-input-button p-2" onClick={this.enterNumber.bind(this, 3)}> 3 </button>
                                <button className="Timer-button timer-input-button p-2" onClick={this.enterNumber.bind(this, 4)}> 4 </button>

                                {this.state.timerOn === false && (this.state.timerStart === 0 || this.state.timerTime === this.state.timerStart) && (
                                    <button className="Timer-button timer-input-button-2 p-2" onClick={this.startTimer}> Set </button>
                                )}
                            </div>
                            
                            <div className="Timer-input d-flex flex-row justify-content-center">
                                <button className="Timer-button timer-input-button p-2" onClick={this.enterNumber.bind(this, 5)}> 5 </button>
                                <button className="Timer-button timer-input-button p-2" onClick={this.enterNumber.bind(this, 6)}> 6 </button>
                                <button className="Timer-button timer-input-button p-2" onClick={this.enterNumber.bind(this, 7)}> 7 </button>
                                <button className="Timer-button timer-input-button p-2" onClick={this.enterNumber.bind(this, 8)}> 8 </button>
                                <button className="Timer-button timer-input-button p-2" onClick={this.enterNumber.bind(this, 9)}> 9 </button>
                                <button className="Timer-button timer-input-button-2 p-2" onClick={this.clearNumbers}> Clear </button>
                            </div>
                        </div>
                    )}

                    {this.state.timerOn === true && this.state.timerTime >= 1000 && 
                        (<button className="Timer-button" onClick={this.stopTimer}>Pause</button>)}
                    {this.state.timerOn === false && (this.state.timerStart !== 0 && this.state.timerStart !== this.state.timerTime && this.state.timerTime !== 0) && 
                        (<button className="Timer-button" onClick={this.startTimer}>Resume</button>)}
                    {this.state.timerTime > 0 && 
                        (<div id="Timer-button-divider"></div>)}
                    {(this.state.timerOn === false || this.state.timerTime < 1000) && (this.state.timerStart !== this.state.timerTime && this.state.timerStart > 0) && 
                        (<button className="Timer-button" onClick={this.resetTimer}>Reset</button>)}
                </div>
            </div>
        );
    }

    enterNumber = (number) => {
        if (this.state.numberEntered === 0) {
            this.setState({
                timerTime: this.state.timerTime + number * 1000,
                numberEntered: this.state.numberEntered + 1
            })
        }
        if (this.state.numberEntered === 1) {
            this.setState({
                timerTime: this.state.timerTime + number * 10000,
                numberEntered: this.state.numberEntered + 1
            })
        }
        if (this.state.numberEntered === 2) {
            this.setState({
                timerTime: this.state.timerTime + number * 60000,
                numberEntered: this.state.numberEntered + 1
            })
        }
        if (this.state.numberEntered === 3) {
            this.setState({
                timerTime: this.state.timerTime + number * 600000,
                numberEntered: this.state.numberEntered + 1
            })
        }
        if (this.state.numberEntered === 4) {
            this.setState({
                timerTime: this.state.timerTime + number * 3600000,
                numberEntered: this.state.numberEntered + 1
            })
        }
        if (this.state.numberEntered === 5) {
            this.setState({
                timerTime: this.state.timerTime + number * 36000000,
                numberEntered: this.state.numberEntered + 1
            })
        }
    }

    clearNumbers = () => {
        this.setState({
            timerTime: 0,
            numberEntered: 0
        })
    }
    
    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: this.state.timerTime
        });
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
    
    stopTimer = () => {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
    };

    resetTimer = () => {
        if (this.state.timerOn === false) {
            this.setState({
                timerOn: false,
                timerStart: 0,
                timerTime: 0,
                numberEntered: 0
            })
            clearInterval(this.timer);
        }
    };
}

export default Countdown;
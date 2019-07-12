import React, { Component } from "react";

class Stopwatch extends Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0,
    };

    pressKey = (e) => {
        if(e.keyCode == 32 && e.target == document.body){
            e.preventDefault();

            if ((this.state.timerOn === false && this.state.timerTime === 0) || (this.state.timerOn === false && this.state.timerTime > 0)) {
                this.startTimer();
            }
            else if (this.state.timerOn === true) {
                this.stopTimer();
            }
        }
        else if(e.altKey && e.target == document.body && this.state.timerTime > 0) {
            e.preventDefault();
            if (e.keyCode == 82) {
                this.resetTimer();
            }
            else if (e.keyCode == 69) {
                this.resetTimer();
            }
        }
    }

    componentDidMount(){
        document.addEventListener("keydown", this.pressKey, false);
      }
    componentWillUnmount(){
        document.removeEventListener("keydown", this.pressKey, false);
    }

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

    render() {
        const { timerTime } = this.state;
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

        return (
            <div className="Stopwatch">

                <div className="Timer-display d-flex flex-row justify-content-center">
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
                
                <div className="Timer-buttons-container">
                    {this.state.timerOn === false && this.state.timerTime === 0 && 
                        (<button className="Timer-button" onClick={this.startTimer}>Start</button>)}
                    {this.state.timerTime > 0 && 
                        (<button className="Timer-button" onClick={this.resetTimer}>End</button>)}
                    {this.state.timerTime > 0 && 
                        (<div id="Timer-button-divider"></div>)}
                    {this.state.timerOn === true && 
                        (<button className="Timer-button" onClick={this.stopTimer}>Pause</button>)}
                    {this.state.timerOn === false && this.state.timerTime > 0 && 
                        (<button className="Timer-button" onClick={this.startTimer}>Resume</button>)}
                    {this.state.timerTime > 0 && 
                        (<div id="Timer-button-divider"></div>)}
                    {this.state.timerTime > 0 && 
                        (<button className="Timer-button" onClick={this.resetTimer}>Reset</button>)}
                </div>
            </div>
        );
    }
}

export default Stopwatch;
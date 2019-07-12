import React, { Component } from "react";

class Shortcut extends Component {

    render() {
        return (
            <div className="shortcut helper-box">
                <h3> Shortcuts </h3>
                <p> 
                    - <b>SPACE</b>   Start/Resume/Pause the timer <br />
                    - <b>ALT+R</b>    Resets Timer <br />
                    - <b>ALT+E</b>    Resets Timer
                </p>
            </div>
        );
    }
}

export default Shortcut
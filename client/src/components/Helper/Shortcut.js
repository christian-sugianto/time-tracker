import React, { Component } from "react";

class Shortcut extends Component {

    render() {
        return (
            <div className="shortcut helper-box">
                <h3> Shortcuts </h3>
                <p> 
                    - <b>SPACE</b>    &ensp;Start/Resume/Pause Timer <br />
                    - <b>ALT+R</b>    &ensp; Resets Timer <br />
                    - <b>ALT+E</b>    &ensp; Ends Timer <br />
                    - <b>ALT+S</b>    &ensp; Switch Type
                </p>
            </div>
        );
    }
}

export default Shortcut
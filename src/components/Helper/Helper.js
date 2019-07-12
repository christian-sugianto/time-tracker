import React, { Component } from "react";

// components
import Shortcut from './Shortcut';
import Notification from './Notification'

class Helper extends Component {

    render() {
        return (
            <div className="helper">
                <div className="d-flex">
                    <Shortcut />
                </div>
                <div className="d-flex">
                    <Notification />
                </div>
            </div>
        );
    }
}

export default Helper
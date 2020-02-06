import React, { Component } from "react";

// components
import Shortcut from './Shortcut';

class Helper extends Component {

    render() {
        return (
            <div className="helper">
                <Shortcut />
                {/* <Notification /> */}
            </div>
        );
    }
}

export default Helper
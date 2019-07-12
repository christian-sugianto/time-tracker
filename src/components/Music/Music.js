import React, { Component } from "react"

// components
import MusicControl from './MusicControl'
import MusicLibrary from './MusicLibrary'

class Music extends Component {
    render() {
        return (
            <div className="music">
                <div className="d-flex">
                    <MusicControl />
                </div>
                <div className="d-flex">
                    <MusicLibrary />
                </div>
            </div>
        );
    }
}

export default Music
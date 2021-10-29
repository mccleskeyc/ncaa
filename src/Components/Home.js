import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div>
            <div className="BgBlock"></div>
                <div className="PickText">
                    Pick Your Team:
                    <input type="search" className="search"></input>
                </div>
        </div>
        )
    }
}

export default Home

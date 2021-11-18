import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div>
            <div className="BgBlock"></div>
                <div className="PickText">
                    Pick Your Team:
                    <input type="search" className="search"></input>
                    <br />
                    <br />
                    <br />
                    Or, <a href="#">pick a random team</a>.
                </div>
        </div>
        )
    }
}

export default Home

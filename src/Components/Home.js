import React, { Component } from 'react'
import Search from './Search'
export class Home extends Component {
    render() {
        return (
            <div>
            <div className="BgBlock"></div>

                <div className="PickText"> Welcome to Broadcast Blitz!

                    
                    <Search />
                    <div className="randomizer">

                        Or, <a href="#" className="random-text">pick a random team</a>.
                    </div>
                </div>
        </div>
        )
    }
}

export default Home

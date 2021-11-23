import React, { Component } from 'react'

export class Search extends Component {
    render() {
        return (
            <div>


        <form className="form">
            <input className="search" type="text" name="query"
                placeholder="Enter your team name here"/>
                <br />
                <br />
            <button className="button" type="submit">Search</button>
        </form>

            
                {/* <input type="search" className="search" placeholder="Enter Your Team's Name"></input> */}
            </div>
        )
    }
}

export default Search

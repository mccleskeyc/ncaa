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

            
            </div>
        )
    }
}

export default Search

import React, { Component } from 'react'

export class Table extends Component {
    render() {
        return (
            <div className="table-container">
                <div className="HeadingText">Florida State University</div>
                <table>
                    <thead>
                        <tr>
                            <th>Week</th>
                            <th>Home Team</th>
                            <th>Away Team</th>
                            <th>Date & Time</th>
                            <th>Broadcast</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Florida State</td>
                            <td>Notre Dame</td>
                            <td>9/5/21 at 7:30pm ET</td>
                            <td>ABC</td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>Jacksonville State University</td>
                            <td>Florida State University</td>
                            <td>9/11/21 at 8:00pm ET</td>
                            <td>ACCN</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table

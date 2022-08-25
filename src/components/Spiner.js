import React, { Component } from 'react'
import Loading from "./Loading.gif"

export default class Spiner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={Loading} alt="Loading Gif" />
            </div>
        )
    }
}

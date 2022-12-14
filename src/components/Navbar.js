import React, { Component } from 'react'
import {


    Link
} from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href='/' >
                        My News
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/general">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/business">
                                    Buisness
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/enterteinment">
                                    Enterteinment
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/health">
                                    health
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Science">
                                    Science
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports">
                                    sports
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology">
                                    technology
                                </Link>
                            </li>


                        </ul>

                    </div>
                </nav>

            </div>
        )
    }
}

export default Navbar

import React from 'react';
import { Link } from 'react-router-dom'


function Nav(){
    return(
        <div>
            <div className="navsection">
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navTop">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navTop">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/services">services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">contact</Link>
                                </li>
                
                            </ul>
                    
                        </div>
                    </div>
                </nav>

            </div>
        </div>

    )
}

export default Nav;
import React from 'react'

//Assets
import Logo from '../../assets/images/virus.png'

//Dependencies
import { Link } from 'react-router-dom'

function Sidenav() {
    return (
        <nav className="d-md-block d-flex justify-content-between">
            <div className="d-md-none d-block">   
                <Link className="link font-weight-bold" to="/">Trackovid</Link>
            </div>
            <div>
                <img src={Logo} alt="Mask Logo"/>
                <Link className="link" to="/">Home</Link>
            </div>
        </nav>
    )
}

export default Sidenav

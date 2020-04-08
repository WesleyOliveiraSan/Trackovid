import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
    return (
        <nav>
            <h1><Link className="title" to="/">Trackovid</Link></h1>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/">Home</Link>
        </nav>
    )
}

export default Sidenav

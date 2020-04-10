import React from 'react'

//Dependencies
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="justify-content-between d-md-flex d-none">
            <Link to="/"><h1>Trackovid</h1></Link>
            <i class="fas fa-github text-white"></i>
        </header>
    )
}

export default Header

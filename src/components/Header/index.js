import React from 'react'

//Dependencies
import { Link } from 'react-router-dom';

//Assets
import github from '../../assets/images/github.png'

function Header() {
    return (
        <header className="justify-content-between d-md-flex d-none">
            <Link to="/"><h1>Trackovid</h1></Link>
            <a href="https://github.com/WesleyOliveiraSan/Trackovid" target="_blank" rel="noopener noreferrer" className="align-self-center" ><img src={github} className="rounded-circle" alt="github-icon" /></a>
        </header>
    )
}

export default Header

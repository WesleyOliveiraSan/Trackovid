import React, { useState } from 'react'

//Assets
import Logo from '../../assets/images/virus.png'
import Menu from '../../assets/images/menu.png'
import On from '../../assets/images/switch-on.png'
import Off from '../../assets/images/switch-off.png'

//Dependencies
import { Link } from 'react-router-dom'

function Sidenav() {

    const [Links, setLinks] = useState(true)

    return (
        <nav>
            <div className="d-md-none d-flex justify-content-between">
                <Link className="link font-weight-bold" to="/">Trackovid</Link>
                <img className="menu" src={Menu} onClick={() => setLinks(!Links)} alt="close" />
            </div>
            <div>
                <img className="logo" src={Logo} alt="Mask Logo" />
                <p className="desc">Aplicação para rastrear os casos de Covid-19 no Brasil</p>
                <div className="nav-div d-md-flex d-none justify-content-between" onClick={() => setLinks(!Links)}>
                    <p>Navigation</p>
                    <img className="menu" src={Links ? On : Off} onClick={() => setLinks(!Links)} alt="close" />
                </div>
            </div>
            <div style={Links ? { display: 'block' } : { display: 'none' }}>
                <Link className="link active" to="/">Mapa</Link>
            </div>
        </nav>
    )
}

export default Sidenav

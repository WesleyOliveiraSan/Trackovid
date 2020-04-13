import React, { useState } from 'react'

//Assets
import Logo from '../../assets/images/virus.png'
import Menu from '../../assets/images/menu.png'
import On from '../../assets/images/switch-on.png'
import Off from '../../assets/images/switch-off.png'

//Dependencies
import { Link } from 'react-router-dom'

function Sidenav() {

    const [path, setPath] = useState(window.location.pathname)
    const [links, setLinks] = useState(true)

    return (
        <nav>
            <div className="d-md-none d-flex justify-content-between">
                <Link className="link font-weight-bold" to="/">Trackovid</Link>
                <img className="menu" src={Menu} onClick={() => setLinks(!links)} alt="close" />
            </div>
            <div>
                <img className="logo" src={Logo} alt="Mask Logo" />
                <p className="desc">Aplicação para rastrear os casos de Covid-19 no Brasil</p>
                <div className="nav-div d-md-flex d-none justify-content-between" onClick={() => setLinks(!links)}>
                    <p>Navigation</p>
                    <img className="menu" src={links ? On : Off} onClick={() => setLinks(!links)} alt="close" />
                </div>
            </div>
            <div style={links ? { display: 'block' } : { display: 'none' }}>
                <Link className={`link ${path === '/' && 'active'}`} onClick={() => setPath('/')} to="/">Inicio</Link>
                <Link className={`link ${path === '/mapa' && 'active'}`} onClick={() => setPath('/mapa')} to="mapa">Mapa</Link>
                <Link className={`link ${path === '/brasil' && 'active'}`} onClick={() => setPath('/brasil')} to="brasil">Brasil</Link>
                <Link className={`link ${path === '/estados' && 'active'}`} onClick={() => setPath('/estados')} to="estados">Estados</Link>
            </div>
        </nav>
    )
}

export default Sidenav

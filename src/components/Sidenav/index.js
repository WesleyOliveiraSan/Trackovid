import React, { useState } from 'react'

//Assets
import Logo from '../../assets/images/virus.png'
import Menu from '../../assets/images/menu.png'
import On from '../../assets/images/switch-on.png'
import Off from '../../assets/images/switch-off.png'

//Components
import ScrollButton from '../ScrollButton'

//Dependencies
import { Link } from 'react-router-dom'

function Sidenav() {

    let navOpen = window.innerWidth < 768 ? false : true

    const [path, setPath] = useState(window.location.pathname)
    const [menu, setMenu] = useState(navOpen)

    return (
        <nav>
            <div className="d-md-none d-flex justify-content-between">
                <Link className="link font-weight-bold" to="/" onClick={() => setPath('/')}>Trackovid</Link>
                <img className="menu" src={Menu} onClick={() => setMenu(!menu)} alt="close" />
            </div>
            <div>
                <img className="logo" src={Logo} alt="Mask Logo" />
                <p className="desc">Aplicação para rastrear os casos de Covid-19 no Brasil</p>
                <div className="nav-div d-md-flex d-none justify-content-between" onClick={() => setMenu(!menu)}>
                    <p>Navigation</p>
                    <img className="menu" src={menu ? On : Off} onClick={() => setMenu(!menu)} alt="close" />
                </div>
            </div>
            <div style={menu ? { display: 'block' } : { display: 'none' }}>
                <Link className={`link ${path === '/' && 'active'}`} onClick={() => { setPath('/'); !navOpen && setMenu(!menu) }} to="/">Inicio</Link>
                <Link className={`link ${path === '/mapa-do-brasil' && 'active'}`} onClick={() => { setPath('/mapa-do-brasil'); !navOpen && setMenu(!menu) }} to="mapa-do-brasil">Mapa do Brasil</Link>
                <Link className={`link ${path === '/estatisticas-do-pais' && 'active'}`} onClick={() => { setPath('/estatisticas-do-pais'); !navOpen && setMenu(!menu) }} to="estatisticas-do-pais">Estatísticas do País</Link>
                <Link className={`link ${path === '/todos-os-estados' && 'active'}`} onClick={() => { setPath('/todos-os-estados'); !navOpen && setMenu(!menu) }} to="todos-os-estados">Todos os Estados</Link>
            </div>
            <ScrollButton scroll="top" position="65" />
            <ScrollButton scroll="bottom" position="15" />
        </nav>
    )
}

export default Sidenav

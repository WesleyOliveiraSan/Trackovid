import React from 'react'

//Dependencies
import { Outlet, Link } from 'react-router-dom';

function Home() {

    return (
        <div className="p-5">
            <Link to='mapa'>Mapa</Link>
            <Link to='brasil'>Brasil</Link>
            <Link to='estados'>Estados</Link>
            <Outlet />
        </div>
    )
}

export default Home

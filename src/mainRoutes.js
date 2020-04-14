import React from 'react';

//Dependencies
import { Routes, Route } from 'react-router-dom';

//Views
import Home from './views/Home';
import MapView from './views/MapView'
import Brazil from './views/Brazil'
import States from './views/States'

const MainRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />}>
            <Route path='mapa-do-brasil' element={<MapView />} />
            <Route path='estatisticas-do-pais' element={<Brazil />} />
            <Route path='todos-os-estados' element={<States />} />
        </Route>
    </Routes>
)

export default MainRoutes;

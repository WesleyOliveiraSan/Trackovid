import React from 'react';

//Dependencies
import { Routes, Route } from 'react-router-dom';

//Views
import Home from './views/Home';
import HomeMap from './views/HomeMap'
import HomeBrazil from './views/Homebrazil'
import HomeStates from './views/HomeStates'

const MainRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='mapa' element={<HomeMap />} />
        <Route path='brasil' element={<HomeBrazil />} />
        <Route path='estados' element={<HomeStates />} />
    </Routes>
)

export default MainRoutes;

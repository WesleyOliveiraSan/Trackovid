import React from 'react';

//Dependencies
import { Routes, Route } from 'react-router-dom';

//Views
import Home from './views/Home';

const MainRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />}></Route>
    </Routes>
)

export default MainRoutes;

import React from 'react';
import Home from './views/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const MainRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
        </Routes>
    </BrowserRouter>
)

export default MainRoutes;

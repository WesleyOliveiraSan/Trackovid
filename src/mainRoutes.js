import React from 'react';
import Footer from './components/Footer';
import Home from './views/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const MainRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer/>
    </BrowserRouter>
)

export default MainRoutes;

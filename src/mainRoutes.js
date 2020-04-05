import React from 'react';

//Dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import Header from './components/Header'
import Footer from './components/Footer';

//Views
import Home from './views/Home';

const MainRoutes = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer/>
    </BrowserRouter>
)

export default MainRoutes;

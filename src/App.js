import React from 'react'

//Dependencies
import './assets/styles/app.scss'
import { BrowserRouter } from 'react-router-dom';

//Components
import Header from './components/Header'
import Footer from './components/Footer';
import Sidenav from './components/Sidenav';

//Routes
import MainRoutes from './mainRoutes'

function App() {
  return (
    <BrowserRouter>
      <div className="row">
        <aside className="col-lg-2">
          <Sidenav />
        </aside>
        <main className="col-lg-10">
          <Header />
          <MainRoutes />
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

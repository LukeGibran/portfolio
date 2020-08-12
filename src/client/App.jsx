import React, { useEffect, lazy, Suspense } from 'react';
import './scss/main.scss';

// Components
const Home = lazy(() => import('./pages/Home'));
const Navbar = lazy(() => import('./layouts/Navbar'));
const Footer = lazy(() => import('./layouts/Footer'));

// Preloader
import Preloader from './layouts/Preloader';

// Materialize CSS
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  // Initialize Materialize JS
  useEffect(() => {
    M.AutoInit();
    AOS.init();
  }, []);
  return (
    <>
      <Suspense fallback={<Preloader component="App" />}>
        <Navbar />

        <Home />

        <Footer />
      </Suspense>
    </>
  );
};

export default App;

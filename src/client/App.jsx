import React, { useEffect } from 'react';
import './scss/main.scss';

// Components
import Home from './pages/Home';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';

// Materialize CSS
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  // Initialize Materialize JS
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};

export default App;

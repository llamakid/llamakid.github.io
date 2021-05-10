import React from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ScrollArrow from './components/ScrollArrow';

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollArrow />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

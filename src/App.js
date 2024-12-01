import React from 'react';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import MainContent from './components/MainContent.js';

import './index.css';

function App() {
  return (
    <div>
      <Header />
      <MainContent/>
      <Footer/>      
    </div>
  );
}

export default App;

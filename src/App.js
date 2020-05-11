import React from 'react';
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import './assets/scss/style.scss';

function App() {
  return (
      <div>
        <Header />
        <Promo />
        <About />
        <Experience />
      </div>
  );
}

export default App;

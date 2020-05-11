import React from 'react';
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import About from "./components/about/About";
import './assets/scss/style.scss'

function App() {
  return (
      <div>
        <Header />
        <Promo />
        <About />
      </div>
  );
}

export default App;

import React from 'react';
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Sessions from "./components/sessions/Sessions";
import Masters from './components/masters/Masters';
import FAQ from './components/faq/Faq';
import Advantages from './components/advantages/Advantages';
import Mailing from './components/mailing/Mailing';
import Projects from './components/projects/Projects';
import Schedule from './components/schedule/Schedule';
import Footer from './components/footer/Footer';
import './assets/scss/style.scss';

function App() {
  return (
      <div>
        <Header />
        <Promo />
        <About />
        <Experience />
        <Sessions />
        <Masters />
        <FAQ />
        <Advantages />
        <Mailing />
        <Projects />
        <Schedule />
        <Footer />
      </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillsToolsJourney from './components/SkillsToolsJourney';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false); // ✅ Add this line

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} /> {/* ✅ Pass props */}
      <Hero />
      <About />
      
      <Portfolio />
      <SkillsToolsJourney />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

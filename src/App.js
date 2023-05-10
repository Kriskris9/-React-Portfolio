import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <Header />
      <AboutMe />
 
      <Portfolio />
      <Resume />
      <Contact />
     <Footer />
    </div>
  );
}

export default App;
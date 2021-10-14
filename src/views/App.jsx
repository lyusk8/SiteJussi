import React from 'react';
import NavBar from '../components/NavBar';
import HeroBanner from '../components/HeroBanner';
import LogoBar from '../components/LogoBar';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer';
import OurSolutions from '../components/OurSolutions';
import JussiSession from '../components/JussiSession';
import Newletter from '../components/Newletter';
import { BrowserRouter as Router } from 'react-router-dom';

const App = (props) => {
  return (
    <div>
      <Router>
        <NavBar />
        <HeroBanner />
        <LogoBar />
        <OurSolutions />
        <JussiSession />
        <ContactInfo />
        <Newletter />
        <Footer />
      </Router>
    </div>
  );
};
export default App;

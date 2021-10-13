import React from 'react';
import NavBar from './components/NavBar';
import HeroBanner from './components/HeroBanner';
import LogoBar from './components/LogoBar';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import OurSolutions from './components/OurSolutions';
import JussiSession from './components/JussiSession';
import Newletter from './components/Newletter';

const App = (props) => {
  return (
    <div>
      <NavBar />
      <HeroBanner />
      <LogoBar />
      <OurSolutions />
      <JussiSession />
      <ContactInfo />
      <Newletter />
      <Footer />
    </div>
  );
};
export default App;

import React from 'react';
import OurSolution from '../../components/OurSolutions';
import HeroBanner from '../../components/HeroBanner';
import LogoBar from '../../components/LogoBar';
import JussiSession from '../../components/JussiSession';
import ContactInfo from '../../components/ContactInfo';
import Newletter from '../../components/Newletter';

const Content = () => {
  return (
    <div>
      <HeroBanner />
      <LogoBar />
      <OurSolution />
      <JussiSession />
      <ContactInfo />
      <Newletter />
    </div>
  );
};

export default Content;

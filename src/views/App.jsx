import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <div id="">
      <Router>
        <NavBar />
        <Content />
      </Router>
      <Footer />
    </div>
  );
};
export default App;

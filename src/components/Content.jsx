import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/templateHome/Home';
import OurSolutions from './OurSolutions';
import JussiSession from './JussiSession';

const Content = () => {
  return (
    <main>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/solutions">
          <OurSolutions />
        </Route>
        <Route pathe="/jussi">
          <JussiSession />
        </Route>
      </Switch>
    </main>
  );
};

export default Content;

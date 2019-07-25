import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Projects from './Projects';
import About from './About';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Projects} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

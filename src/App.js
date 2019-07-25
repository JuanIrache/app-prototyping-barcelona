import React from 'react';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './App.css';

const App = () => (
  <BrowserRouter>
    <div>
      <Link to="/">Home</Link> <Link to="/about">About</Link>
    </div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  </BrowserRouter>
);

export default App;

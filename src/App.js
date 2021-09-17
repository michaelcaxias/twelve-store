import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import Nav from './pages/Nav';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route to="/nav" component={ Nav } />
        <Route to="/" component={ Search } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

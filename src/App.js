import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import Nav from './pages/Nav';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route to="/nav" component={ Nav } />
        <Route path="/cart" component={ Cart } />
        <Route exact path="/" component={ Search } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

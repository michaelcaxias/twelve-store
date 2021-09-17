import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './pages/Search';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route to="/" component={ Search } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

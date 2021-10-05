import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './styles/main.scss';
import UserList from './components/UserList';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route exact path="/">
          <Home/>
        </Route>
        <UserList/>
      </Router>
    </div>
  );
};

export default App;

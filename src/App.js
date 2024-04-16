import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Outlet, Route } from 'react-router-dom';
import './App.css';
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Outlet>
          <Route path='/' exact component=
          {Home} />
        </Outlet>
      </Router>
    </>
  );
}

export default App;

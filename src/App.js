import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
        <Navbar />
        <p>Hello world!</p>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>

          {/* Catch any unmatched routes */}
          <Route>404 Not found</Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;

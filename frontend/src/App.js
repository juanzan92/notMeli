import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
//Pages
import LandingPage from './pages/Landing';

function App() {
  return (
        <Router>
          <Route exact path="/" component={LandingPage} />
        </Router>
  );
}

export default App;

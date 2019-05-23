import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
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

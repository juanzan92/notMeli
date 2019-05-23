import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
//Pages
import LandingPage from './pages/Landing';
import CategoryItemsPage from './pages/CategoryItems';

function App() {
  return (
        <Router>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/category/:idCategory" component={CategoryItemsPage} />
        </Router>
  );
}

export default App;

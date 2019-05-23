import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
//Pages
import LandingPage from './pages/Landing';
import LogIn from './pages/LogIn';
import CategoryItemsPage from './pages/CategoryItems';
import ItemPage from './pages/Item';

function App() {
  return (
        <Router>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/category/:idCategory" component={CategoryItemsPage} />
          <Route exact path="/item/:idItem" component={ItemPage} />

        </Router>
  );
}

export default App;

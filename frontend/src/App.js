import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
//Pages
import LandingPage from './pages/Landing';
<<<<<<< HEAD
import LogIn from './pages/LogIn';
=======
import CategoryItemsPage from './pages/CategoryItems';
>>>>>>> ef6b1cc3317a29761d69af00cffb2839d4187c42

function App() {
  return (
        <Router>
          <Route exact path="/" component={LandingPage} />
<<<<<<< HEAD
          <Route exact path="/login" component={LogIn} />
=======
          <Route exact path="/category/:idCategory" component={CategoryItemsPage} />
>>>>>>> ef6b1cc3317a29761d69af00cffb2839d4187c42
        </Router>
  );
}

export default App;

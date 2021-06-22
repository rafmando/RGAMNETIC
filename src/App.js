import React from 'react'
import './components/css/App.css';
import NavBar from './components/NavBar'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Footer from './components/pages/Footer'
function App() {
  return (
    <Router>
        <NavBar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/services' component={Services}/>
          <Route path='/products' component={Products}/>
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;

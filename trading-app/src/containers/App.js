import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import News from '../components/News';
import NavBar from '../components/NavBar';
import Form from './Form';
import Orders from './Orders'
import OrderTesting from './OrderTesting'



class App extends Component {
  render() {
    return (
  <div>
    <Router>
    <div>
    <NavBar />
    <Route exact path="/" component= {Home} />
    <Route path="/about" component= {About} />
    <Route path="/news" component= {News} />
    <Route exact path='/orders/new'component={Form}/>
    <Route exact path='/orders'component={Orders}/>
    <Route exact path='/orders/test'component={OrderTesting}/>
    </div>
    </Router>
  </div>
    );
  }
}

export default App;

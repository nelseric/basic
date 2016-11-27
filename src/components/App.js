import React, { Component } from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router'

import Hello from './Hello';
import NoMatch from './NoMatch';
import Home from './Home';

import logo from '../logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/basic">
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/hello">Hello</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="App-intro">
            <Match pattern='/' exactly component={Home}/>
            <Match pattern='/hello' component={Hello}/>
            <Miss component={NoMatch} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

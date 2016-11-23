import React, { Component } from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router'

import Inspector from 'react-inspector';

import Hello from './Hello';

import logo from './logo.svg';
import './App.css';


const Home = ({location}) => {
  return (
    <h3>Welcome to my game.</h3>
  );
}

const NoMatch = ({location}) => {
  return (
    <div>
      <h3>There's nothing here.</h3>
      <Inspector data={location} />
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
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
          <p className="App-intro">
            <Match pattern='/' exactly component={Home}/>
            <Match pattern='/hello' component={Hello}/>
            <Miss component={NoMatch} />
          </p>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

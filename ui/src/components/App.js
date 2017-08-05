import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Route exact path="/" render={() => (
          <h2>ALL</h2>
        )} />
        <Route path="/category" render={() => (
          <h2>CATEGORY</h2>
        )} />
        <Route path="/post" render={() => (
          <h2>POST</h2>
        )} />
      </div>
    );
  }
}

export default App;

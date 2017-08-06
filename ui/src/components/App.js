import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Link, withRouter } from 'react-router-dom'
import { getCategories } from '../utils/api'
import logo from '../logo.svg';
import '../App.css';

class App extends Component {

  state = {
    categories: []
  }

  componentDidMount() {
    getCategories().then((categories) => {
      const mapped = categories.map((category) => ({
        name: category.name,
        path: `/category/${category.path}`
      }))
      this.setState({categories: mapped})
    })
  }

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
        <div>
          <ul>
            {this.state.categories.map((category) =>(
              <li key={category.path}>
                <Link to={category.path}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Route exact path="/" render={() => (
          <h2>ALL</h2>
        )} />
        <Route path="/category/:categoryName" render={({match}) => (
          <h2>CATEGORY - {match.params.categoryName}</h2>
        )} />
        <Route path="/post" render={() => (
          <h2>POST</h2>
        )} />
      </div>
    );
  }
}

export default withRouter(connect()(App));

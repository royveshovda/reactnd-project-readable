import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Link, withRouter } from 'react-router-dom'
import { getCategories, getRootPosts, getCategoryPosts } from '../utils/api'
import logo from '../logo.svg';
import '../App.css';
import ListPosts from './ListPosts'
import {
  FETCH_CATEGORIES_PENDING,
  FETCH_CATEGORIES_FULFILLED,
  //FETCH_CATEGORIES_REJECTED,
  FETCH_POSTS_PENDING,
  FETCH_POSTS_FULFILLED,
  //FETCH_POSTS_REJECTED
} from '../actions'

class App extends Component {

  state = {
    categories: [],
    posts: []
  }

  componentDidMount() {
    this.props.getCategoriesFromApi()
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
        <Route exact path="/" onEnter={this.props.getRootPosts()} render={() => (
          <div>
            <h2>ALL</h2>
            <ListPosts />
          </div>
        )} />
        <Route path="/category/:categoryName" onEnter={this.props.getCategoryPostsFromApi(this.props.match.params.categoryName)} render={({match}) => (
          <div>
            <h2>CATEGORY - {match.params.categoryName}</h2>
            <ListPosts />
          </div>
        )} />
        <Route path="/post" render={() => (
          <div>
            <h2>POST</h2>
          </div>
        )} />
      </div>
    );
  }
}

function mapStateToProps ({categories, posts}) {
  return {
    categories,
    posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getRootPosts: () => {
      dispatch({type: FETCH_POSTS_PENDING})
      getRootPosts().then((posts) => {
        dispatch({type: FETCH_POSTS_FULFILLED, payload: posts})
      })
    },
    getCategoryPostsFromApi: (category) => {
      dispatch({type: FETCH_POSTS_PENDING})
      getCategoryPosts(category).then((posts) => {
        dispatch({type: FETCH_POSTS_FULFILLED, payload: posts})
      })
    },
    getCategoriesFromApi: () => {
      dispatch({type: FETCH_CATEGORIES_PENDING})
      getCategories().then((categories) => {
        dispatch({type: FETCH_CATEGORIES_FULFILLED, payload: categories})
      })
    }
  }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

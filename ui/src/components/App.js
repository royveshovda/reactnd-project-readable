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
            {this.props.category.items.map((categoryItem) =>(
              <li key={categoryItem.path}>
                <Link to={'/category/'+categoryItem.path}>
                  {categoryItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Route exact path="/" render={() => (
          <div>
            {console.log(this)}
            <h2>ALL</h2>
            <ListPosts />
          </div>
        )} />
        <Route path="/category/:categoryName" render={({match}) => (
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

function mapStateToProps ({category}) {
  return {category}
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

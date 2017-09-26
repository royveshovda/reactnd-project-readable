import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Link, withRouter } from 'react-router-dom'
import { getCategories } from '../utils/api'
import logo from '../logo.svg';
import '../App.css';
import ListPosts from './ListPosts'
import PostDetails from './PostDetails'
import { FETCH_CATEGORIES_PENDING, FETCH_CATEGORIES_FULFILLED } from '../actions'

class App extends Component {

  componentDidMount() {
    this.props.getCategoriesFromApi()
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Project readable</h2>
        </div>
        <div>
          <ul>
            <li key='all'>
              <Link to={'/'}>
                ALL
              </Link>
            </li>
            {this.props.category.items.map((categoryItem) =>(
              <li key={categoryItem.path}>
                <Link to={'/'+categoryItem.path}>
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
            <ListPosts category='ALL'/>
          </div>
        )} />
        <Route exact path="/:categoryName" render={({match}) => (
          <div>
            <ListPosts category={match.params.categoryName}/>
          </div>
        )} />
        <Route exact path="/:categoryName/:postId" render={({match}) => (
          <div>
            <PostDetails post_id={match.params.postId} />
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
    getCategoriesFromApi: () => {
      dispatch({type: FETCH_CATEGORIES_PENDING})
      getCategories().then((categories) => {
        dispatch({type: FETCH_CATEGORIES_FULFILLED, payload: categories})
      })
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

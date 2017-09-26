import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { FETCH_POSTS_PENDING, FETCH_POSTS_FULFILLED } from '../actions'
import { getRootPosts, getCategoryPosts } from '../utils/api'

class ListPosts extends Component{
  componentDidUpdate(prevProps, prevState){
    const { category } = this.props
    const previousCategory = prevProps.category

    if (category !== previousCategory) {
      if (category === 'ALL') {
        this.props.getRootPostsFromApi()
      } else {
        this.props.getCategoryPostsFromApi(category)
      }
    }
  }

  componentDidMount() {
    const { category } = this.props

    if (category === 'ALL') {
      this.props.getRootPostsFromApi()
    } else {
      this.props.getCategoryPostsFromApi(category)
    }
  }

  render() {
    const { category, post } = this.props

    return (

      <div className="list-posts">
        <h2>CATEGORY - {category}</h2>
        <ol className="books-grid">
          {post.items.map((postDetails) => (
            <li key={postDetails.id}>
              <Link to={'/' + postDetails.category + '/' +postDetails.id}>{postDetails.title}</Link>
              <h4>{postDetails.author}</h4>
              <h5>{postDetails.body}</h5>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

function mapStateToProps ({post}) {
  return {post}
}

function mapDispatchToProps (dispatch) {
  return {
    getRootPostsFromApi: () => {
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
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ListPosts)

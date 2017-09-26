import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  FETCH_COMMENTS_PENDING,
  FETCH_COMMENTS_FULFILLED,
  FETCH_POSTS_PENDING,
  FETCH_POSTS_FULFILLED
} from '../actions'
import { getPost, getComments } from '../utils/api'



class PostDetails extends Component{
  componentDidMount() {
    const { post, post_id } = this.props
    if (post.fetched === false){
      console.log('Should get post details')
      this.props.getPostFromApi(post_id)
    }

    this.props.getCommentsFromApi(post_id)
  }
  render(){
    console.log('POST:')
    const { post, post_id, comment } = this.props
    console.log(post)
    const postDetails = post.items.find(p => p.id === post_id)
    console.log(postDetails)

    if ( !postDetails ){
      return (
        <div>
          Loading...
        </div>
      )
    }else{
      return (
        <div>
          <h2>{postDetails.title}</h2>
          <h3>Votescore: {postDetails.voteScore}</h3>
          <h4>Author: {postDetails.author}</h4>
          <h5>{postDetails.body}</h5>

          <h3>Comments:</h3>
          <ul className="comments-grid">
            {comment.items.map((commentDetails) => (
              <li key={commentDetails.id}>
                <h5>Votescore: {commentDetails.voteScore}</h5>
                <h4>Author: {commentDetails.author}</h4>
                <h5>{commentDetails.body}</h5>
              </li>
            ))}
          </ul>

        </div>
      )
    }
  }
}

function mapStateToProps ({post, comment}) {
  return {post, comment}
}

function mapDispatchToProps (dispatch) {
  return {
    getCommentsFromApi: (postId) => {
      dispatch({type: FETCH_COMMENTS_PENDING})
      getComments(postId).then((comments) => {
        dispatch({type: FETCH_COMMENTS_FULFILLED, payload: comments})
      })
    },
    getPostFromApi: (postId) => {
      dispatch({type: FETCH_POSTS_PENDING})
      getPost(postId).then((posts) => {
        dispatch({type: FETCH_POSTS_FULFILLED, payload: [posts]})
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)

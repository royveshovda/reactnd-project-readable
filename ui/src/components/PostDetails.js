import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class PostDetails extends Component{
  render(){
    const { post_id } = this.props
    return (
      <div>
        <h2>PostDetails - {post_id}</h2>
      </div>
    )
  }
}

export default PostDetails

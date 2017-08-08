import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ListPosts extends Component{
  state = {
    posts: []
  }

  render() {
    return (
      <div className="list-posts">
        <ol className="books-grid">
          {this.state.posts.map((post) => (
            <li key={post.id}>
              <Link to={'/post/'+post.id}>{post.title}</Link>
              <h4>{post.author}</h4>
              <h5>{post.body}</h5>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default ListPosts

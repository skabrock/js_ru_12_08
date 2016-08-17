import React, { Component } from 'react'

import Comment from './Comment'

export default class CommentList extends Component {

    state = {
      isCommentsVisible: false
    }

    toggleComents = (e) => {
        this.setState({
          isCommentsVisible: !this.state.isCommentsVisible
        })
    }

    render() {

      const { comments } = this.props;

      const commentItems = comments && comments.length
          ? comments.map(comment =>
              <li key = {comment.id}>
                  <Comment comment = {comment} />
              </li>
           )
          : <i>There is no comments yet</i>

      return (
          <div>
            <button onClick = {this.toggleComents}>{(this.state.isCommentsVisible ? 'hide comments' : 'show comments') + ' (' + ( comments ? comments.length : 0 ) + ')'}</button>
            <br />
            <br />
            <ul>
                {this.state.isCommentsVisible ? commentItems : null}
            </ul>
          </div>
      )
    }
}
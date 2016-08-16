import React, { Component } from 'react'

import CommentList from './CommentList'

export default class Article extends Component {

    state = {
        isOpen: false,
        isCommentsVisible: false
    }

    render() {
        const { article } = this.props
        const body = this.state.isOpen
            ? <section>
                  {article.text}
                  <br />
                  <br />
                  <button onClick = {this.toggleComents}>{this.state.isCommentsVisible ? 'hide comments' : 'show comments'}</button>
                  {
                      this.state.isCommentsVisible
                          ? <CommentList comments = { article.comments } />
                          : null
                  }
              </section>
            : null
        return (
            <div>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {body}
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    toggleComents = (e) => {
        this.setState({
          isCommentsVisible: !this.state.isCommentsVisible
        })
    }
}
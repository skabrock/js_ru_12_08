import React, { Component, PropTypes, createClass } from 'react'
import Comment from './Comment'

const CommentList = createClass({
    getInitialState() {
        return {
            isOpen: false
        }
    },

    render() {
        const { comments } = this.props
        const { isOpen } = this.state
        if (!comments || !comments.length) return <p>No comments yet</p>
        const toggleButton = <a href="#" onClick = {this.toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>

        if (!isOpen) return <div>{toggleButton}</div>

        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)

        return (
            <div>
                {toggleButton}
                <ul>{commentItems}</ul>
            </div>
        )
    },

    toggleOpen(ev) {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
})

export default CommentList
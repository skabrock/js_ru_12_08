import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
/*

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }

*/
    state = {
        isOpen: false
    }

    static propTypes = {
        article: PropTypes.object.isRequired
    }

    render() {
        const { article: { text, title, comments} } = this.props
        const body = this.state.isOpen ? <section>{text}<CommentList comments = {comments}/></section> : null
        return (
            <div>
                <h3 onClick = {this.handleClick}>{title}</h3>
                {body}
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
import React, { Component, PropTypes, createClass } from 'react'
import Article from './Article'
import accordion from '../mixins/accordion'

const ArticleList = createClass({

    mixins: [accordion],

    render() {
        const { articles } = this.props;
        const { openId } = this.state;

        const articleItems = articles.map(articleObject =>
            <li key = {articleObject.id}>
                <Article article = {articleObject}
                    isOpen = {openId === articleObject.id}
                    toggleOpen = {this.toggleOpen(articleObject.id)}
                />
            </li>)
        return (
            <ul>
                {articleItems}
            </ul>
        )
    }
})

export default ArticleList
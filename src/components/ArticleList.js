import React, { Component, PropTypes } from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.array,
        openId: PropTypes.number,
        toggleOpen: PropTypes.func,
    }

    render() {
        const { articles, openId, toggleOpen } = this.props;

        const articleItems = articles.map(articleObject =>
            <li key = {articleObject.id}>
                <Article article = {articleObject}
                    isOpen = {openId === articleObject.id}
                    toggleOpen = {toggleOpen(articleObject.id)}
                />
            </li>)
        return (
            <ul>
                {articleItems}
            </ul>
        )
    }
}

export default accordion(ArticleList)
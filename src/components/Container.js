import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class Container extends Component {
    static propTypes = {

    };

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Select options = {options}/>
                <ArticleList articles = {this.props.articles} />
            </div>
        )
    }
}

export default Container
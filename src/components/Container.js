import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import JqueryComponent from './JqueryComponent'
import DaypickerContainer from './DaypickerContainer'
import Counter from './Counter'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'

class Container extends Component {
    static propTypes = {

    };

    state = {
        selected: null
    }

    render() {

        const { filter, articles } = this.props;

        const getTimestamp = (date, add = 0) => {
          if (date) {
            return new Date(date).getTime() + add;
          } else {
            return null;
          }
        }

        const filtredArticles = articles.filter( article => {

          const date = getTimestamp(article.date);
          const from = getTimestamp(filter.from);
          const to = getTimestamp(filter.to ? filter.to : filter.from, 1000*60*60*24); // set default end date as start date & addtional time to next day equals 24 hours

          if (!from){
            return article;
          } else {
            if (date >= from && date <= to) {
              return article;
            }
          }
        })

        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Counter />
                <ArticleList articles = {filtredArticles} />
                <Select options = {options} value={this.state.selected} onChange = {this.handleChange} multi={true}/>
                <DaypickerContainer />
                <JqueryComponent items = {articles} ref={this.getJQ}/>
            </div>
        )
    }

    getJQ = (ref) => {
        this.jqRef = ref
        console.log('---', findDOMNode(ref))
    }

    handleChange = (selected) => {
        this.setState({
            selected
        })
    }
}

export default connect((state) => {
    const { articles, filter } = state
    return { articles, filter}
}
)(Container)
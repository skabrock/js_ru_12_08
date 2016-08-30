import React, { Component, PropTypes } from 'react'
import DayPicker, { DateUtils } from "react-day-picker"
import 'react-day-picker/lib/style.css'
import { connect } from 'react-redux'
import { filterArticlesFrom, filterArticlesTo } from '../AC/filter'

class Daypicker extends Component {
    static propTypes = {
        from: PropTypes.object,
        to: PropTypes.object,
    };

    render() {
        return (
            <div>
                <DayPicker
                    ref="daypicker"
                    selectedDays={this.handleSelect}
                    onDayClick={this.handleDayClick}
                />
                {this.getRangeTitle()}
            </div>
        )
    }

    handleSelect = day => DateUtils.isDayInRange(day, this.props)
    getRangeTitle() {
        const { from, to } = this.props
        const fromText = from && `Start date: ${from.toDateString()}`
        const toText = to && `Finish date: ${to.toDateString()}`

        return <p>{fromText} {toText}</p>
    }

    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.props);
        const { filterArticlesFrom, filterArticlesTo } = this.props;

        filterArticlesFrom(range.from);
        filterArticlesTo(range.to);
    }
}

export default connect((state) => {
    const { from, to } = state.filter
    return { from, to }
},
    {filterArticlesFrom, filterArticlesTo}
)(Daypicker)
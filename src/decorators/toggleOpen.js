//HOC - higher order component
//decorator
import React from 'react'

export default (Component) => {
    return class DecoratedComponent extends React.Component {
        state = {
            isOpen: false
        }

        toggleOpen = ev => {
            if (ev) ev.preventDefault()
            this.setState({
                isOpen: !this.state.isOpen
            })
        }

        render() {
            console.log('---', 321)
            return <Component {...this.props} isOpen = {this.state.isOpen} toggleOpen = {this.toggleOpen}/>
        }
    }
}
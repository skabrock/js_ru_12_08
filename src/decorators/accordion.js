import React from 'react'

export default (Component) => {
    return class ToggleOpenComponent extends React.Component {
        state = {
            openId: null
        }

        toggleOpen = id => ev => {
            if (ev) ev.preventDefault()
            this.setState({
                openId: ( id !== this.state.openId ) ? id : null
            })
        }

        render() {
            return <Component {...this.props} openId = {this.state.openId} toggleOpen = {this.toggleOpen}/>
        }
    }
}
export default {
    getInitialState() {
        return {
            openId: null
        }
    },

    toggleOpen(id, ev) {
        let self = this
        return function (ev) {
            if (ev) ev.preventDefault()
            self.setState({
                openId: ( id !== self.state.openId ) ? id : null
            })
        };
    },
}
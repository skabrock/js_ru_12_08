export default {
    getInitialState() {
        return {
            openId: null
        }
    },

    toggleOpen(id, ev) {
        if (ev) ev.preventDefault()
        let self = this
        return function (ev) {
            self.setState({
                openId: ( id !== self.state.openId ) ? id : null
            })
        };
    },
}
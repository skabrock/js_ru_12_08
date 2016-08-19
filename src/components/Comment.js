import React, { PropTypes } from 'react'

function Comment(props) {
    const { comment: { user, text } } = props
    return (
        <p>
            {text}
            <strong>by {user}</strong>
        </p>
    )
}

export default Comment
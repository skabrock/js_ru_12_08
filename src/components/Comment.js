import React from 'react'

export default function Comment(props) {

    return(
        <div>
            <strong>{props.comment.user}</strong>
            <br />
            <p>{props.comment.text}</p>
        </div>
    )
}
import React from 'react'

export default function Comment(props) {

    return(
        <div>
            {
                props.comment.title
                    ? <span><strong>{props.comment.title}</strong> | </span>
                    : null
            }
            <i>{props.comment.user}</i>
            <br />
            <p>{props.comment.text}</p>
        </div>
    )
}
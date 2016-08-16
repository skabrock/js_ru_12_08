import React from 'react'

import Comment from './Comment'

export default function CommentList(props) {
    const commentItems = props.comments && props.comments.length
        ? props.comments.map(comment =>
            <li key = {comment.id}>
                <Comment comment = {comment} />
            </li>
         )
        : <p>There is no comments yet</p>
    return (
        <ul>
            <br />
            {commentItems}
        </ul>
    )
}
import React, { Component } from 'react'
import '../styles/CommentBox.css'

export default class CommentBox extends Component {
    render() {
        return (
            <div className="CommentBox__root">
                <input
                    className="CommentBox__input"
                    type="text"
                    placeholder="Add a comment..."
                />
            </div>
        )
    }
}

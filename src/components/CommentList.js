import React, { Component } from 'react'
import CommentListItem from './CommentListItem';

export default class CommentList extends Component {
    render() {
        const { comments } = this.props
        return (
            <div className="GalleryItem__comments">
                {
                    comments.map(comment => {
                        return (
                            <CommentListItem
                                key={comment.id}
                                comment={comment}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

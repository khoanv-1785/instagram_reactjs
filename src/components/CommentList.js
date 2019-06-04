import React, { Component } from 'react'
import CommentListItem from './CommentListItem';

export default class CommentList extends Component {
    render() {
        return (
            <div className="GalleryItem__comments">
                <CommentListItem />
                <CommentListItem />
                <CommentListItem />
                <CommentListItem />
            </div>
        )
    }
}

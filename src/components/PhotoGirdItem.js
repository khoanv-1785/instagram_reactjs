import React, { Component } from 'react'
import '../styles/PhotoThumbnailItem.css'
import PropTypes from 'prop-types'

export default class PhotoGirdItem extends Component {
    _getStyleObject() {
        return {
            backgroundImage: `url(${this.props.post.photoUrl})`,
        };
    }
    render() {
        const { onClick, post } = this.props
        const { likesCount, commentsCount } = post
        return (
            <div className="PhotoThumbnailItem__root" onClick={() => onClick(post)}>
                <div
                    style={this._getStyleObject()}
                    className="Profile__photo-image"
                />
                <div className="PhotoThumbnailItem__overlay">
                    <div className="PhotoThumbnailItem__overlay-icons">
                        <div className="PhotoThumbnailItem__likes-count">
                            <i className="fa fa-heart" /> <span className="PhotoThumbnailItem__count"></span>{likesCount}
                        </div>
                        <div className="PhotoThumbnailItem__comments-count">
                            <i className="fa fa-comment" /> <span className="PhotoThumbnailItem__count">{commentsCount}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
PhotoGirdItem.propTypes = {
    post: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
}
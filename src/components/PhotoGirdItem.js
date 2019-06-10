import React, { Component } from 'react'
import '../styles/PhotoThumbnailItem.css'
import PropTypes from 'prop-types'

export default class PhotoGirdItem extends Component {

    _getStyleObject() {
        return {
            backgroundImage: `url(${this.props.avatarUrl})`,
        };
    }
    render() {
        return (
            <div className="PhotoThumbnailItem__root">
                <div
                    style={this._getStyleObject()}
                    className="Profile__photo-image"
                />
                <div className="PhotoThumbnailItem__overlay">
                    <div className="PhotoThumbnailItem__overlay-icons">
                        <div className="PhotoThumbnailItem__likes-count">
                            <i className="fa fa-heart" /> <span className="PhotoThumbnailItem__count"></span>{this.props.likesCount}
                        </div>
                        <div className="PhotoThumbnailItem__comments-count">
                            <i className="fa fa-comment" /> <span className="PhotoThumbnailItem__count">{this.props.commentsCount}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
PhotoGirdItem.propTypes = {
    avatarUrl: PropTypes.string.isRequired,
    likesCount: PropTypes.number.isRequired,
    commentsCount: PropTypes.number.isRequired,
}
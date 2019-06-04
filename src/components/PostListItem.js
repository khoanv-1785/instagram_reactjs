import React, { Component } from 'react'
import '../styles/GalleryItem.css'
import { Link } from 'react-router-dom'
import CommentList from './CommentList';
import LikeButton from './LikeButton';
import CommentBox from './CommentBox';

export default class PostListItem extends Component {
    render() {
        return (
            <article className="GalleryItem__root">
                <div className="GalleryItem-header">
                    <div className="GalleryItem-header__avatar-container">
                        <img
                            src="https://graph.facebook.com/10156350578431313/picture?type=large"
                            className="GalleryItem-header__avatar-img"
                            alt="alt of image"
                        />
                    </div>
                    <div className="GalleryItem-header__metadata-container">
                        <div className="GalleryItem-header__username">
                            <Link to="/">username</Link>
                        </div>
                        {/* {address ?
                            (<div className="GalleryItem-header__address">
                                <Link to={`/explore/locations/${placeId}`}>{address}</Link>
                            </div>) : null} */}
                    </div>
                    <div className="GalleryItem-header__timestamp">
                        temp time
                    </div>

                </div>
                {/* phan chinh chua anh  */}
                <div
                    className="GalleryItem__body"
                // style={this.getFilterStyle()}
                >
                    <img src="https://hackafy-app.s3.amazonaws.com/uploads/post/photo/685/sun__.jpg"
                        role="presentation"
                    />
                    {/* {this.renderHeartAnimation()} */}
                </div>
                <div className="GalleryItem__footer">
                    {/* {this.renderLikes()}  */}
                    <div className="GalleryItem__likes">
                        99 Like
                    </div>

                    {/* {this.renderCaption()} */}
                    {/* {this.renderViewMoreComments()} */}
                    {/* {this.renderComments()} */}
                    <CommentList />
                    <div className="GalleryItem__action-box">
                        <div className="GalleryItem__like-button">
                            {/*  like button */}
                            <LikeButton />
                            {/* <LikeButton
                                onLike={this.props.onLike}
                                onDislike={this.props.onDislike}
                                liked={this.props.liked}
                            /> */}
                        </div>
                        <div className="GalleryItem__comment-box">
                            {/* list comment */}
                            <CommentBox />
                            {/* <CommentBox onSubmit={this.props.onCommentSubmit} /> */}
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}

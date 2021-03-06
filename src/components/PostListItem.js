import React, { Component } from 'react'
import '../styles/GalleryItem.css'
import { Link } from 'react-router-dom'
import CommentList from '../containers/CommentList';
import LikeButton from './LikeButton';
import CommentBox from './CommentBox';
import defaultAvatar from '../images/default-avatar.png'
import momment from 'moment'
import PropTypes from 'prop-types'

export default class PostListItem extends Component {

    handleAddComment = (postId, commentBody) => {
        this.props.handleAddComment(postId, commentBody)
    }

    render() {
        const {
            id,
            photoUrl,
            caption,
            createdAt,
            userId,
            address,
            placeId,
            likesCount,
            commentPagination,
            user: {
                username,
                avatarUrl
            },
            comments
        } = this.props.post

        return (
            <article className="GalleryItem__root">
                <div className="GalleryItem-header">
                    <div className="GalleryItem-header__avatar-container">
                        <img
                            src={avatarUrl ? avatarUrl : defaultAvatar}
                            className="GalleryItem-header__avatar-img"
                            alt={`${username} profile`}
                        />
                    </div>
                    <div className="GalleryItem-header__metadata-container">
                        <div className="GalleryItem-header__username">
                            <Link to={`/${username}`} >{username}</Link>
                        </div>
                        {
                            address ?
                                (<div className="GalleryItem-header__address">
                                    <Link to={`/explore/locations/${placeId}`}>{address}</Link>
                                </div>) : null
                        }
                    </div>
                    <div className="GalleryItem-header__timestamp">
                        {momment(createdAt).fromNow()}
                    </div>

                </div>
                {/* phan chinh chua anh  */}
                <div
                    className="GalleryItem__body"
                // style={this.getFilterStyle()}
                >
                    {caption}
                    <img src={photoUrl}
                        role="presentation"
                        alt=" "
                    />
                    {/* {this.renderHeartAnimation()} */}
                </div>
                <div className="GalleryItem__footer">
                    {/* {this.renderLikes()}  */}
                    <div className="GalleryItem__likes">
                        {likesCount} likes
                    </div>

                    {/* {this.renderCaption()} */}
                    {/* {this.renderViewMoreComments()} */}
                    {/* {this.renderComments()} */}
                    <CommentList
                        postId={id}
                        comments={comments}
                        commentPagination={commentPagination}
                        loadMoreComment={this.props.loadMoreComment}
                        deleteComment={this.props.deleteComment}
                    />
                    <div className="GalleryItem__action-box">
                        <div className="GalleryItem__like-button">
                            {/*  like button */}
                            <LikeButton 
                               // isLiked={this.props.isLiked}
                                // onLike={this.props.onLike}
                                // onDisLike={this.props.onDisLike}
                                // postId={id}
                            />
                            
                        </div>
                        <div className="GalleryItem__comment-box">
                            {/* add comment */}
                            <CommentBox
                                postId={id}
                                onSubmitCommentBox={this.handleAddComment}
                            />
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}

PostListItem.propTypes = {
    // add/load more/delete commment
    handleAddComment: PropTypes.func.isRequired,
    loadMoreComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
    //like/dislike post
   // isLiked: PropTypes.bool.isRequired,
    // onLike: PropTypes.func.isRequired,
    // onDisLike: PropTypes.func.isRequired,
}
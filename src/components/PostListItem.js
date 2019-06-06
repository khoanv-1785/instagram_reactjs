import React, { Component } from 'react'
import '../styles/GalleryItem.css'
import { Link } from 'react-router-dom'
import CommentList from './CommentList';
import LikeButton from './LikeButton';
import CommentBox from './CommentBox';
import defaultAvatar from '../images/default-avatar.png'
import momment from 'moment'
import PropTypes from 'prop-types'

export default class PostListItem extends Component {

    handleAddComment = (postId, commentBody) => {
        this.props.handleAddComment(postId, commentBody)
    }
    
    handleLoadMoreComment = currentPage => {
        const postId = this.props.post.id
        this.props.handleLoadMoreComment(postId, currentPage)
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
                        onLoadMoreComment={this.handleLoadMoreComment}
                     />
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
                            <CommentBox
                                postId={id}
                                onSubmitCommentBox={this.handleAddComment}
                             />
                            {/* <CommentBox onSubmit={this.props.onCommentSubmit} /> */}
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}

PostListItem.propTypes = {
    handleAddComment: PropTypes.func.isRequired,
    handleLoadMoreComment: PropTypes.func.isRequired,
}
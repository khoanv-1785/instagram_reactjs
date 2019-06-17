import React, { Component } from 'react'
import Modal from 'react-modal'
import '../styles/PostModal.css'
import PropTypes from 'prop-types'
import avatarDefault from '../images/default-avatar.png'
import CommentList from '../containers/CommentList'

export default class PostSlide extends Component {
    styleModal = () => {
        return {
            overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.75)'
            },
            content: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                right: 'initial',
                bottom: 'initial',
                transform: 'translate(-50%, -50%)',
                border: 'none',
                background: '#fff',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '0px',
                outline: 'none',
                padding: '0px',
                width: '65vw',
            }
        }
    }

    renderPostSlide = () => {
        const { post, onNextPost, onPrevPost, isNextPost, isPrevPost } = this.props
        if (Object.keys(post).length > 0) {
            const { id, photoUrl, caption, likesCount, user: { username, avatarUrl }, comments, commentPagination } = post
            return (
                <div className="PostModal__root">
                    <div className="row">
                        <div className="PostModal__photo-wrapper eight columns">
                            <button
                                className="PostModal__prev-btn"
                                onClick={() => onPrevPost(post.id)}
                            >
                                {
                                    isPrevPost ? <i className="fa fa-angle-left" /> : null
                                }
                            </button>
                            <div>
                                <img
                                    src={photoUrl}
                                    role="presentation"
                                    className="PostModal__photo-image"
                                    alt=" "
                                />
                            </div>
                            <button
                                className="PostModal__next-btn"
                                onClick={() => onNextPost(post.id)}
                            >
                                {
                                    isNextPost ? <i className="fa fa-angle-right" /> : null
                                }
                            </button>
                        </div>
                        <div className="PostModal__info-container four columns">
                            <div className="PostModal__user-info">
                                <div className="PostModal__avatar-wrapper">
                                    <img src={avatarUrl ? avatarUrl : avatarDefault} alt=" " />
                                </div>
                                <div className="Profile__modal-user-username">
                                    {username}
                                </div>
                                {/* {this.renderFollowButton()} */}
                            </div>

                            <div className="PostModal__post-stats">
                                <span>{likesCount} likes </span>
                            </div>

                            <div className="PostModal__caption">
                                <strong>{username} </strong> {caption}
                            </div>
                            {/* phan commnent list */}
                            <div className="PostModal__comments">
                                <CommentList
                                    postId={id}
                                    comments={comments}
                                    commentPagination={commentPagination}
                                    loadMoreComment={this.props.loadMoreComment}
                                    deleteComment={this.props.deleteComment}
                                />
                            </div>
                            {/* phan like or dislike */}
                            {/* <div className="PostModal__action-box">
                            <div className="PostModal__like-button">
                                <LikeButton
                                    onLike={this.props.onLike}
                                    onDislike={this.props.onDislike}
                                    liked={this.props.liked}
                                />
                            </div>
                            // phan add comment
                            <div className="PostModal__comment-box">
                                <CommentBox onSubmit={this.props.onCommentSubmit} />
                            </div>
                        </div> */}
                        </div>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }

    render() {
        const { isOpen, onRequestClose } = this.props
        return (
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                style={this.styleModal()}
                contentLabel="Example Modal"
            >
                {this.renderPostSlide()}
            </Modal>
        )
    }
}

PostSlide.propTypes = {
    // control open/close modal
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    // control show/hide next/prev button 
    onNextPost: PropTypes.func.isRequired,
    onPrevPost: PropTypes.func.isRequired,
    // load more comment
    loadMoreComment: PropTypes.func.isRequired,
    // delete comnet
    deleteCommnent: PropTypes.func.isRequired,
}

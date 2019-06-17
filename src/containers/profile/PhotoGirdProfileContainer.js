import React, { Component } from 'react'
import PhotoGirdItem from '../../components/PhotoGirdItem'
import '../../styles/PhotoGird.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PostSlide from '../../components/PostSlide';
import _ from 'lodash'
import {
    loadMoreCommentProfile,
    selectCurrentPost,
    requestCloseModal,
    requestOpenModal,
    nextPost,
    prevPost,
    deleteCommentProfile,
} from '../../actions/profileActions'
import { 
    getCurrentPostSelector,
    getIsNextPostSelector,
    getIsPrevPostSelector,
    getIsOpenModalSelector,
 } from '../../selector/profileSelector'


class PhotoGirdProfileContainer extends Component {
    handleDeleteComment = (postId, commentId) => {
        console.log(postId, commentId)
    }
    render() {
        const { postsProfile, currentPost, isOpenModal, isNextPost, isPrevPost } = this.props
        return (
            <React.Fragment>
                <div className="PhotoGrid__root">
                    <div className="PhotoGrid__grid-container Locations__photo-gallery">
                        {
                            postsProfile.map(post => {
                                return (
                                    <PhotoGirdItem
                                        key={`profile-key-${post.id}`}
                                        post={post}
                                        onClick={() => this.props.dispatchSelectCurrentPost(post)}
                                    />
                                )
                            })
                        }
                    </div>
                    {
                        currentPost ?
                            <PostSlide
                                isOpen={isOpenModal}
                                onRequestClose={() => this.props.dispatchRequestCloseModal()}
                                post={currentPost}
                                onNextPost={(postId) => this.props.dispatchNextPost(postId)}
                                onPrevPost={(postId) => this.props.dispatchPrevPost(postId)}
                                isNextPost={isNextPost}
                                isPrevPost={isPrevPost}
                                loadMoreComment={(postId, currentPage) => this.props.dispatchLoadMoreCommentProfile(postId, currentPage)}
                                deleteComment={(postId, commentId) => this.props.dispatchDeleteCommentProfile(postId, commentId)}
                            /> : null
                    }
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPost: getCurrentPostSelector(state),
        isOpenModal: getIsOpenModalSelector(state),
        isNextPost: getIsNextPostSelector(state),
        isPrevPost: getIsPrevPostSelector(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchSelectCurrentPost: (post) => dispatch(selectCurrentPost(post)),
        dispatchLoadMoreCommentProfile: (postId, currentPage) => dispatch(loadMoreCommentProfile(postId, currentPage)),
        dispatchDeleteCommentProfile: (postId, commentId) => dispatch(deleteCommentProfile(postId, commentId)),
        dispatchRequestOpenModal: () => dispatch(requestOpenModal()),
        dispatchRequestCloseModal: () => dispatch(requestCloseModal()),
        dispatchNextPost: (postId) => dispatch(nextPost(postId)),
        dispatchPrevPost: (postId) => dispatch(prevPost(postId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGirdProfileContainer)

PhotoGirdProfileContainer.propTypes = {
    currentPost: PropTypes.object.isRequired,
    isOpenModal: PropTypes.bool.isRequired,
    isNextPost: PropTypes.bool.isRequired,
    isPrevPost: PropTypes.bool.isRequired,
    postsProfile: PropTypes.array.isRequired,
    profilePagination: PropTypes.object.isRequired,
    dispatchSelectCurrentPost: PropTypes.func.isRequired,
    dispatchLoadMoreCommentProfile: PropTypes.func.isRequired,
    dispatchDeleteCommentProfile: PropTypes.func.isRequired,
    dispatchRequestOpenModal: PropTypes.func.isRequired,
    dispatchRequestCloseModal: PropTypes.func.isRequired,
    dispatchNextPost: PropTypes.func.isRequired,
    dispatchPrevPost: PropTypes.func.isRequired



}
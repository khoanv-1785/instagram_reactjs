import React, { Component } from 'react'
import PhotoGirdItem from '../../components/PhotoGirdItem'
import '../../styles/PhotoGird.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PostSlide from '../../components/PostSlide';
import _ from 'lodash'
import { loadMoreCommentProfile, selectCurrentPost } from '../../actions/profileActions'
import { getCurrentPostSelector } from '../../selector/profileSelector'

class PhotoGirdProfileContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ioOpenModal: false,
            isNextPost: true,
            isPrevPost: true,
        }
    }

    handlePhotoGirdClick = (post) => {
        const { postsProfile } = this.props
        this.props.dispatchSelectCurrentPost(post)
        const currentPostIndex = _.findIndex(postsProfile, postItem => postItem.id === post.id)
        if (currentPostIndex === 0) {
            this.setState({
                isPrevPost: false,
                isNextPost: true,
                isOpenModal: true,
            })
        } else if (currentPostIndex === postsProfile.length - 1) {
            this.setState({
                isPrevPost: true,
                isNextPost: false,
                isOpenModal: true,
            })
        } else {
            this.setState({
                isNextPost: true,
                isPrevPost: true,
                isOpenModal: true,
            })
        }
    }

    handleCloseModal = () => {
        this.setState({
            isOpenModal: false
        })
    }

    // handle when click next button
    handleNextPost = (postId) => {
        const { postsProfile } = this.props
        const postsLength = postsProfile.length
        const currentPostIndex = _.findIndex(postsProfile, (post) => post.id === postId)
        if (currentPostIndex < postsLength - 1) {
            this.setState({
                post: postsProfile[currentPostIndex + 1]
            })
        }
        if (currentPostIndex === postsLength - 2) {
            this.setState({
                isNextPost: false,
                isPrevPost: true,
            })
        } else {
            this.setState({
                isNextPost: true,
                isPrevPost: true
            })
        }
    }

    handlePrevPost = (postId) => {
        const { postsProfile } = this.props
        const currentPostIndex = _.findIndex(postsProfile, (post) => post.id === postId)
        if (currentPostIndex > 0) {
            this.setState({
                post: postsProfile[currentPostIndex - 1]
            })
        }
        if (currentPostIndex === 1) {
            this.setState({
                isPrevPost: false,
                isNextPost: true,
            })
        } else {
            this.setState({
                isNextPost: true,
                isPrevPost: true,
            })
        }
    }

    render() {
        const { postsProfile, currentPost } = this.props
        const { isOpenModal, isNextPost, isPrevPost } = this.state
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
                                        onClick={this.handlePhotoGirdClick}
                                    />
                                )
                            })
                        }
                    </div>
                    {
                        currentPost ?
                            <PostSlide
                                isOpen={isOpenModal}
                                onRequestClose={this.handleCloseModal}
                                post={currentPost}
                                onNextPost={this.handleNextPost}
                                onPrevPost={this.handlePrevPost}
                                isNextPost={isNextPost}
                                isPrevPost={isPrevPost}
                                loadMoreComment={(postId, currentPage) => this.props.dispatchLoadMoreCommentProfile(postId, currentPage)}
                            /> : null
                    }
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPost: getCurrentPostSelector(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchSelectCurrentPost: (post) => dispatch(selectCurrentPost(post)),
        dispatchLoadMoreCommentProfile: (postId, currentPage) => dispatch(loadMoreCommentProfile(postId, currentPage)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGirdProfileContainer)

PhotoGirdProfileContainer.propTypes = {
    postsProfile: PropTypes.array.isRequired,
    profilePagination: PropTypes.object.isRequired,
}
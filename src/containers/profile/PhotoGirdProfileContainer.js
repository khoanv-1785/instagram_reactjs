import React, { Component } from 'react'
import PhotoGirdItem from '../../components/PhotoGirdItem'
import '../../styles/PhotoGird.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PostSlide from '../../components/PostSlide';
import _ from 'lodash'
import { getPostsSelector } from '../../selector/postSelector'

class PhotoGirdProfileContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ioOpenModal: false,
            post: {},
            isNextPost: true,
            isPrevPost: true,
        }
    }

    handlePhotoGirdClick = (post) => {
        const { postsProfile } = this.props
        const currentPostIndex = _.findIndex(postsProfile, postItem => postItem.id === post.id)
        if (currentPostIndex === 0) {
            this.setState({
                isPrevPost: false,
                isNextPost: true,
                isOpenModal: true,
                post: post,
            })
        } else if (currentPostIndex === postsProfile.length - 1) {
            this.setState({
                isPrevPost: true,
                isNextPost: false,
                isOpenModal: true,
                post: post,
            })
        } else {
            this.setState({
                isNextPost: true,
                isPrevPost: true,
                isOpenModal: true,
                post: post,
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
        // const { postsProfile } = this.props
        const postsProfile = JSON.parse(localStorage.getItem('postsTotal'))
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
        // const { postsProfile } = this.props
        const postsProfile = JSON.parse(localStorage.getItem('postsTotal'))
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

    // khi thay doi props
    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    componentWillReceiveProps(nextProps) {
        if (nextProps.postsTotal !== this.props.postsTotal) {
            const { username } = this.props
            const postsTotal = JSON.parse(localStorage.getItem('postsTotal'))
            const currentPostId = this.state.post.id
            const newPostAfterLoadMoreCommentOfUser = postsTotal.filter(post => post.user.username === username)
            const currentPostIndex = _.findIndex(newPostAfterLoadMoreCommentOfUser, post => post.id === currentPostId)
            this.setState({
                post: newPostAfterLoadMoreCommentOfUser[currentPostIndex]
            })
        }
    }

    render() {
        const { postsProfile } = this.props
        const { isOpenModal, post, isNextPost, isPrevPost } = this.state

        return (
            <React.Fragment>
                <div className="PhotoGrid__root">
                    <div className="PhotoGrid__grid-container Locations__photo-gallery">
                        {
                            postsProfile.map(post => {
                                return (
                                    <PhotoGirdItem
                                        key={post.id}
                                        post={post}
                                        onClick={this.handlePhotoGirdClick}
                                    />
                                )
                            })
                        }
                    </div>
                    <PostSlide
                        isOpen={isOpenModal}
                        onRequestClose={this.handleCloseModal}
                        post={post}
                        onNextPost={this.handleNextPost}
                        onPrevPost={this.handlePrevPost}
                        isNextPost={isNextPost}
                        isPrevPost={isPrevPost}
                        loadMoreCommentProfile={this.handleLoadMoreCommentProfile}
                    />
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        postsTotal: getPostsSelector(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // dispatchLoadMoreCommentProfile: (username, postId, currentPage) => dispatch(loadMoreCommentProfile(username, postId, currentPage))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGirdProfileContainer)

PhotoGirdProfileContainer.propTypes = {
    postsProfile: PropTypes.array.isRequired,
    profilePagination: PropTypes.object.isRequired,
    username: PropTypes.string.isRequired,
    postsTotal: PropTypes.array.isRequired,
}
import React, { Component } from 'react'
import PhotoGirdItem from '../../components/PhotoGirdItem'
import '../../styles/PhotoGird.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PostSlide from '../../components/PostSlide';
import _ from 'lodash'
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
        this.setState({
            isOpenModal: true,
            post: post,
        })
    }

    handleCloseModal = () => {
        this.setState({
            isOpenModal: false
        })
    }

    handleNextPost = (postId) => {
        const { posts } = this.props
        const postsLength = posts.length
        const currentPostIndex = _.findIndex(posts, (post) => post.id === postId)
        if (currentPostIndex < postsLength - 1) {
            this.setState({
                post: posts[currentPostIndex + 1]
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
                isPrevPost: true,
            })
        }
    }

    handlePrevPost = (postId) => {
        const { posts } = this.props
        const currentPostIndex = _.findIndex(posts, (post) => post.id === postId)
        if (currentPostIndex > 0) {
            this.setState({
                post: posts[currentPostIndex - 1]
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
        const { posts } = this.props
        const { isOpenModal, post, isNextPost, isPrevPost } = this.state
        return (
            <React.Fragment>
                <div className="PhotoGrid__root">
                    <div className="PhotoGrid__grid-container Locations__photo-gallery">
                        {
                            posts.map(post => {
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
                    />
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGirdProfileContainer)

PhotoGirdProfileContainer.propTypes = {
    posts: PropTypes.array.isRequired,
    profilePagination: PropTypes.object.isRequired,
}
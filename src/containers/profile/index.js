import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HeaderProfileContainer from './HeaderProfileContainer'
import PhotoGirdProfileContainer from './PhotoGirdProfileContainer'
import { connect } from 'react-redux'
import {
    getPostsByUsername,
    getUserPublicProfile,
    getMorePostsByUsername,
} from '../../actions/profileActions'
import {
    getIsFetchingProfileSelector,
    getPostsProfileSelector,
    getProfilePaginationSelector,
    getUserProfileSelector,
} from '../../selector/profileSelector'
import Spinner from '../../components/Spinner'

class ProfilePage extends Component {

    componentDidMount() {
        const { username } = this.props
        this.props.dispatchGetUserPublicProfile(username)
        this.props.dispatchGetPostsByUsername(username)
        document.addEventListener('scroll', this.handleScrollFetchMorePostsOfUser)
    }

    componentWillMount() {
        document.removeEventListener('scroll', this.handleScrollFetchMorePostsOfUser)
    }

    handleScrollFetchMorePostsOfUser = () => {
        const totalHeight = document.body.scrollHeight
        const innerHeight = window.innerHeight
        const scrollY = window.scrollY
        const { currentPage, nextPage } = this.props.profilePagination
        const { username } = this.props
        if (innerHeight + scrollY >= totalHeight) {
            if (nextPage !== null) {
                this.props.dispatchGetMorePostsByUsername(username, currentPage)
            }
        }
    }

    render() {
        const { isFetching, posts, profilePagination, publicProfile } = this.props
        return (
            <div className="Profile__root container">
                <HeaderProfileContainer
                    publicProfile={publicProfile}
                    postsLength={posts.length}
                />
                {/* hien thi danh sach cac bai post cua user */}
                <PhotoGirdProfileContainer
                    posts={posts}
                    profilePagination={profilePagination}
                />
                {
                    isFetching ?
                        <div className="PhotoGallery__spinner-container">
                            <Spinner />
                        </div> : null
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: getIsFetchingProfileSelector(state),
        posts: getPostsProfileSelector(state),
        profilePagination: getProfilePaginationSelector(state),
        publicProfile: getUserProfileSelector(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchGetPostsByUsername: (username) => dispatch(getPostsByUsername(username)),
        dispatchGetUserPublicProfile: username => dispatch(getUserPublicProfile(username)),
        dispatchGetMorePostsByUsername: (username, currentPage) => dispatch(getMorePostsByUsername(username, currentPage)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)

ProfilePage.propTypes = {
    username: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    posts: PropTypes.array.isRequired,
    profilePagination: PropTypes.object.isRequired,
    publicProfile: PropTypes.object.isRequired,
    dispatchGetPostsByUsername: PropTypes.func.isRequired,
    dispatchGetUserPublicProfile: PropTypes.func.isRequired,
    dispatchGetMorePostsByUsername: PropTypes.func.isRequired,
}
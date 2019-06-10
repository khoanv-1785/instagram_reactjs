import React, { Component } from 'react'
import defaultAvatar from '../../images/default-avatar.png'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FollowButton from '../../components/FollowButton'

class HeaderProfileContainer extends Component {
    render() {
        const { avatarUrl, username, followersCount, followingCount } = this.props.publicProfile
        const { postsLength } = this.props
        const currentUser = JSON.parse(localStorage.getItem('currentUser'))
        const currentUsername = currentUser.attrs.username
        return (
            <div className="row Profile__user-info-container">
                <div className="four columns">
                    <div className="Profile__avatar-img-wrapper">
                        <img
                            src={avatarUrl ? avatarUrl : defaultAvatar}
                            className="Profile__avatar-img"
                            alt=""
                        />
                    </div>
                </div>
                <div className="five columns">
                    <h3 className="Profile__username">{username}</h3>
                    {
                        (currentUsername === username) ?
                            <button className="Profile__edit-button">
                                <Link to="/profile/edit">Edit Profile</Link>
                            </button> :
                            <FollowButton />
                    }

                    {/* <FollowButton /> */}
                    {/* render actionButotn : Editbutton(khi username chinh la user hien tai)  or follow button(neu user ko la user hien tai)  */}
                    {/* {this.renderActionButton()}
                    {this.renderMenuButton()} */}
                    <div className="Profile__stats">
                        <div className="Profile__stats-item">
                            {postsLength} <span className="Profile__stats-count">posts</span>
                        </div>
                        <div
                            className="Profile__stats-item Profile__stats-item--link"
                        // onClick={() => this._openUsersModal('followers')}
                        >
                            {followersCount} <span className="Profile__stats-count">followers</span>
                        </div>
                        <div
                            className="Profile__stats-item Profile__stats-item--link"
                        // onClick={() => this._openUsersModal('following')}
                        >
                            {followingCount} <span className="Profile__stats-count">following</span>
                        </div>
                    </div>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderProfileContainer)
HeaderProfileContainer.propTypes = {
    publicProfile: PropTypes.object.isRequired,
    postsLength: PropTypes.number.isRequired,
}
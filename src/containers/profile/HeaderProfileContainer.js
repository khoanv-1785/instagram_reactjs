import React, { Component } from 'react'
import defaultAvatar from '../../images/default-avatar.png'
import { Link } from 'react-router-dom'

export default class HeaderProfileContainer extends Component {
    render() {
        return (
            <div className="row Profile__user-info-container">
                <div className="four columns">
                    <div className="Profile__avatar-img-wrapper">
                        <img
                            src={defaultAvatar}
                            className="Profile__avatar-img"
                            alt=""
                        />
                    </div>
                </div>
                <div className="five columns">
                    <h3 className="Profile__username">NguyenDangKhoa</h3>
                    <button className="Profile__edit-button">
                        <Link to="/profile/edit">Edit Profile</Link>
                    </button>
                    {/* <FollowButton /> */}
                    {/* render actionButotn : Editbutton(khi username chinh la user hien tai)  or follow button(neu user ko la user hien tai)  */}
                    {/* {this.renderActionButton()}
                {this.renderMenuButton()} */}
                    <div className="Profile__stats">
                        <div className="Profile__stats-item">
                            99 <span className="Profile__stats-count">posts</span>
                        </div>
                        <div
                            className="Profile__stats-item Profile__stats-item--link"
                        // onClick={() => this._openUsersModal('followers')}
                        >
                            99  <span className="Profile__stats-count">followers</span>
                        </div>
                        <div
                            className="Profile__stats-item Profile__stats-item--link"
                        // onClick={() => this._openUsersModal('following')}
                        >
                            99 <span className="Profile__stats-count">following</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

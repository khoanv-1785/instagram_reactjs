import React, { Component } from 'react'
import '../styles/FollowButton.css'

export default class FollowButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isFollowing: false
        }
    }

    render() {
        const { isFollowing } = this.state
        return (
            <React.Fragment>
                {
                    isFollowing ?
                        <button
                            className="FollowButton__root FollowButton--following"
                            // onClick={props.onUnfollowClick}
                        >
                            Following
                  </button> :
                        <button
                            className="FollowButton__root"
                            // onClick={props.onFollowClick}
                        >
                            Folllow
                </button>
                }
            </React.Fragment>
        )
    }
}

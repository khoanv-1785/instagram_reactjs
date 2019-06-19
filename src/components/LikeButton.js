import React, { Component } from 'react'
import '../styles/LikeButton.css'
import PropTypes from 'prop-types'
import _ from 'lodash'
export default class LikeButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLiked: false,
        }
    }

    onClickLikeButton = () => {
        this.setState({
            isLiked: !this.state.isLiked
        })

    }
    render() {
        const { isLiked } = this.state
        return (
            <button
                className="LikeButton__root"
                onClick={this.onClickLikeButton}
            >
                {
                    isLiked ?
                        <i className="fa fa-heart LikeButton__icon LikeButton__icon--liked" />
                        : <i className="fa fa-heart-o LikeButton__icon" />
                }

            </button>
        )
    }
}

LikeButton.propTypes = {
    // postId: PropTypes.number.isRequired,
    // isLiked: PropTypes.bool.isRequired,
    // onLike: PropTypes.func.isRequired,
    // onDislike: PropTypes.func.isRequired,
}
import React, { Component } from 'react'
import '../styles/LikeButton.css'
export default class LikeButton extends Component {
    render() {
        return (
            <button
                className="LikeButton__root"
            >
                <i className="fa fa-heart LikeButton__icon LikeButton__icon--liked" />
                <i className="fa fa-heart-o LikeButton__icon" />
            </button>
        )
    }
}

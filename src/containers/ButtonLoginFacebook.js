import React, { Component } from 'react'
import '../styles/FacebookLoginButton.css'
export default class ButtonLoginFacebook extends Component {
    render() {
        return (
            <div className="FacebookLoginButton__root">
                <button
                    className="FacebookLoginButton__button"
                >
                    {/* {this.props.isLoggingWithFB ? */}
                        <i className="fa fa-spinner fa-pulse fa-3x fa-fw FacebookLoginButton__spinner" />
                        <i className="fa fa-facebook-official FacebookLoginButton__icon" /> Log in with Facebook
                </button>
            </div>
        )
    }
}

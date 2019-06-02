import React, { Component } from 'react'
import '../styles/SignInForm.css'
import { connect } from 'react-redux'
import {
    getIsSignInSelector,
    getUserSelecctor,
    getErrorSignInSelector,
} from '../selector/userAuthenSelector'
class SignInForm extends Component {
    render() {
        return (
            <form className="SignInForm__root">
                <fieldset>
                    <input
                        type="text"
                        placeholder="Email"
                        className="SignInForm__input"
                    />
                    {/* {this.renderError(email)} */}
                </fieldset>
                <fieldset>
                    <input
                        type="password"
                        placeholder="Password"
                        className="SignInForm__input"
                    />
                    {/* {this.renderError(password)} */}
                </fieldset>
                <button
                    className="SignInForm__button"
                    //   disabled={this.props.invalid || isAuthenticating}
                    type="submit">
                    {/* {isAuthenticating ? */}
                    <i className="fa fa-spinner fa-pulse fa-3x fa-fw SignInForm__spinner" />
                    Log In
                </button>
                {/* <ErrorMessages messages={this.props.errorMessages} /> */}
            </form>
        )
    }
}

 const mapStateToProps = (state) => {
    return {
        isSignIn: getIsSignInSelector(state),
        user: getUserSelecctor(state),
        error: getErrorSignInSelector(state),
        test: state.form
    }
}

export default connect(mapStateToProps, null)(SignInForm)
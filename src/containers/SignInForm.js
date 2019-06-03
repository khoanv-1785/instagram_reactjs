import React, { Component } from 'react'
import '../styles/SignInForm.css'
import { connect } from 'react-redux'
import {
    getIsSignInSelector,
    getUserSelecctor,
    getErrorSignInSelector,
} from '../selector/userAuthenSelector'
import { reduxForm, Field } from 'redux-form'
import { signIn } from '../actions/userAuthenAction'
import PropTypes from 'prop-types'

class SignInForm extends Component {

    renderField = ({
        input,
        placeholder,
        type,
        className,
        meta: { touched, error }
    }) => (
            <div>
                <input {...input} placeholder={placeholder} type={type} className={className} />
                {touched &&
                    (error && <span className="SignInForm__error-text">{error}</span>)
                }
            </div>
    )
    render() {
        const { handleSubmit, invalid } = this.props
        return (
            <form className="SignInForm__root" onSubmit={handleSubmit((values) => this.props.dispatchSignIn(values))}>
                <fieldset>
                    <Field
                        name="email_signin"
                        type="email"
                        placeholder="Email address"
                        component={this.renderField}
                        className="SignInForm__input"
                    />
                </fieldset>
                <fieldset>
                    <Field
                        name="password_signin"
                        type="password"
                        component={this.renderField}
                        placeholder="password"
                        className="SignInForm__input"
                    />
                </fieldset>
                <button
                    className="SignInForm__button"
                    disabled={invalid}
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchSignIn: (user) => dispatch(signIn(user))
    }
}

const validate = values => {
    const errors = {}
    if (!values.email_signin) {
        errors.email_signin = 'Email is required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email_signin)) {
        errors.email_signin = 'Invalid email address';
      }

    if (!values.password_signin) {
        errors.password_signin = 'Password is required';
    } else if (values.password_signin.length < 8) {
        errors.password_signin = 'Password is too short (minimum 8 characters)';
    }
    return errors
}

export default reduxForm({
    form: 'signinFormValidate',
    validate
})(connect(mapStateToProps, mapDispatchToProps)(SignInForm))

SignInForm.propTypes = {
    isSignIn: PropTypes.bool,
    user: PropTypes.object,
    error: PropTypes.array,
    dispatchSignIn: PropTypes.func,
}
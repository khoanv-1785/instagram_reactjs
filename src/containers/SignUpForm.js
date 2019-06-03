import React, { Component } from 'react'
import '../styles/SignUpForm.css'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { signUp } from '../actions/userAuthenAction'
import ErrorsMessage from '../components/ErrorsMessage'
import {
    getIsSignUpSelector,
    getTokenSelector,
    getErrorSignUpSelector
} from '../selector/userAuthenSelector'
import PropTypes from 'prop-types'

class SignUpForm extends React.Component {

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
                    (error && <span className="SignUpForm__error-text">{error}</span>)
                }
            </div>
        )

    render() {
        const { handleSubmit, invalid, isSignUp, token, errors } = this.props
        console.log(isSignUp)
        return (
            <form className="SignUpForm__root" onSubmit={handleSubmit((values) => this.props.dispatchSigUp(values))} >
                <Field
                    name="email"
                    component={this.renderField}
                    type="email"
                    placeholder="email address"
                    className="SignUpForm__input"
                />
                <fieldset>
                    <Field
                        type="text"
                        name="username"
                        component={this.renderField}
                        className="SignUpForm__input"
                        placeholder="Username"
                    />
                </fieldset>
                <fieldset>
                    <Field
                        type="password"
                        name="password"
                        component={this.renderField}
                        placeholder="password"
                        className="SignUpForm__input"
                    />
                </fieldset>
                <button
                    className="SignUpForm__button"
                    disabled={invalid}
                    type="submit"
                >
                {
                    isSignUp ? <i className="fa fa-spinner fa-pulse fa-3x fa-fw SignUpForm__spinner" /> : 'Sign Up'
                }
                </button>
                <ErrorsMessage errors={errors} />
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSignUp: getIsSignUpSelector(state),
        token: getTokenSelector(state),
        errors: getErrorSignUpSelector(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       dispatchSigUp: (user) => dispatch(signUp(user))
    }
}

const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    if (!values.username) {
      errors.username = 'Username is required';
    } else if (values.username.length < 4) {
      errors.username = 'Username is too short (minimum 3 characters)';
    } else if (values.username.length > 30) {
      errors.username = 'Username is too long (maximum 30 characters)';
    } else if (!/^[A-Z0-9_-]{3,30}$/i.test(values.username)) {
       errors.username = 'Username should be one word (- and _ allowed)'
    } // Add uniqueness
  
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password is too short (minimum 8 characters)';
    }
    return errors;
  }

export default reduxForm({
    form: 'signUpFormValidation',
    validate,
})(connect(mapStateToProps, mapDispatchToProps)(SignUpForm))

SignUpForm.propTypes = {
    isSignUp: PropTypes.bool,
    token: PropTypes.string,
    error: PropTypes.object,
    dispatchSigUp: PropTypes.func,
}
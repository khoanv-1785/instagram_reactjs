import React, { Component } from 'react'
import '../styles/SignIn.css'
import SignInForm from '../containers/SignInForm'
import FormDivider from '../components/FormDivider';
import ButtonLoginFacebook from '../containers/ButtonLoginFacebook';

export default class SignInPage extends Component {
    render() {
        return (
            <div className="sign-in__root container">
                <div className="row">
                    <div className="six columns offset-by-three">
                        <div className="SignIn__form-wrapper">
                            <SignInForm />
                            <FormDivider />
                            <ButtonLoginFacebook />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

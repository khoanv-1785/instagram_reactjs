import React, { Component } from 'react'
import '../styles/SignUp.css'
import SignUpForm from '../containers/SignUpForm';
import FormDivider from '../components/FormDivider';
import ButtonLoginFacebook from '../containers/ButtonLoginFacebook';

export default class SignUpPage extends Component {
    render() {
        return (
            <div className="SignUp__root container">
                <div className="row">
                    <div className="six columns offset-by-three">
                        <div className="SignUp__form-wrapper">
                           <SignUpForm />
                           <FormDivider />
                           <ButtonLoginFacebook />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

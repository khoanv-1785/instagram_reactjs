import React, { Component } from 'react'
import Header from '../components/Header'
import { connect } from 'react-redux'
import {
    getIsSuccessSignInSelector,
    getIsSuccessSignUpSelector,
} from '../selector/userAuthenSelector'
class HeaderContainer extends Component {
    render() {
        const { isSuccessSignIn, isSuccessSignUp } = this.props
        return (
            <React.Fragment>
                <Header
                    isSuccessSignIn={isSuccessSignIn}
                    isSuccessSignUp={isSuccessSignUp}
                />
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isSuccessSignIn: getIsSuccessSignInSelector(state),
        isSuccessSignUp: getIsSuccessSignUpSelector(state),
    }
}

export default connect(mapStateToProps)(HeaderContainer)
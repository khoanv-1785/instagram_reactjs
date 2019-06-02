import React, { Component } from 'react'
import '../styles/FormDivider.css'

export default class FormDivider extends Component {
    render() {
        return (
            <div className="FormDivider__root">
                <div className="FormDivider__line" />
                <div className="FormDivider__text">OR</div>
                <div className="FormDivider__line" />
            </div>
        )
    }
}

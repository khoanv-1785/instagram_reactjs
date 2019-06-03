import React, { Component } from 'react'
import '../styles/ErrorMessages.css'
import PropTypes from 'prop-types'

export default class ErrorsMessage extends Component {
    render() {
        const { errors } = this.props
        return (
            <div className="ErrorMessages__root">
                {
                    errors.map((error, index) => {
                        return(
                            <div
                                className="ErrorMessages__item"
                                key={index}
                            >
                                {error}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

ErrorsMessage.propTypes = {
    errors: PropTypes.array.isRequired,
}

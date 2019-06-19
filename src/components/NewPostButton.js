import React from 'react'
import PropTypes from 'prop-types'
import '../styles/NewPostButton.css'

const NewPostButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="NewPostButton__root">
            +
      </button>
    )
}
NewPostButton.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default NewPostButton
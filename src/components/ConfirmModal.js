import React, { Component } from 'react'
import '../styles/ConfirmationModal.css'
import Modal from 'react-modal'
import PropTypes from 'prop-types'
Modal.setAppElement('#root')
const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.45)'
    },
    content: {
        position: 'absolute',
        top: '45%',
        left: '50%',
        right: 'initial',
        bottom: 'initial',
        transform: 'translate(-50%, -50%)',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '0px',
    }
}
export default class ConfirmModal extends Component {
    render() {
        const { isOpen, onRequestClose, onClickConfirm, confirmMessage, cancelMessage } = this.props
        return (
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                contentLabel="Confirm Modal"
                style={customStyles}
            >
                <div>
                    <button
                        className="ConfirmationModal__button"
                        onClick={onClickConfirm}>
                        {confirmMessage}
                    </button>
                    <button
                        className="ConfirmationModal__button"
                        onClick={onRequestClose}>
                        {cancelMessage}
                    </button>
                </div>
            </Modal>
        )
    }
}

ConfirmModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    onClickConfirm: PropTypes.func.isRequired,
    confirmMessage: PropTypes.string.isRequired,
    cancelMessage: PropTypes.string.isRequired,
}

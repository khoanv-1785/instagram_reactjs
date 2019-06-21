import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewPostButton from '../../components/NewPostButton'
import UploadImageContainer from '../creatPost/UploadImageContainer'
import UpdateImageContainer from '../creatPost/UpdateImageContainer'
import EditImageContainer from '../creatPost/EditImageContainer'
import Modal from 'react-modal'
import '../../styles/NewPostBoard.css'
import { getActiveStepIndexSelector } from '../../selector/createPostSelector'
const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0, 0.3)'
    },
    content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        right: 'initial',
        bottom: 'initial',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '30px'

    }
}
class index extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isOpenModal: false
        }
    }
    
    renderStep = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <UploadImageContainer />
            case 1:
                return <EditImageContainer />
            case 2:
                return <UpdateImageContainer />
            default:
                return null
        }
    }

    handleOpenModal = () => {
        this.setState({
            isOpenModal: true,
        })
    }

    handleCloseModal = () => {
        this.setState({
            isOpenModal: false,
        })
    }

    render() {
        const { isOpenModal } = this.state
        const { activeStepIndex } = this.props
        return (
            <React.Fragment>
                <Modal
                    isOpen={isOpenModal}
                    onRequestClose={this.handleCloseModal}
                    style={customStyles}
                >
                    {this.renderStep(activeStepIndex)}
                </Modal>
                <NewPostButton onClick={this.handleOpenModal} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        activeStepIndex: getActiveStepIndexSelector(state),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
import React, { Component } from 'react'
import PictureDropzone from '../../components/DropPicture'
import { connect } from 'react-redux'
import { 
    nextStepCreatePost,
    dropImage, 
} from '../../actions/createPostAction'
import PropTypes from 'prop-types'

class UploadImageContainer  extends Component {
    
    onDrop = files => {
        this.props.dispatchDropImage(files[0])
        this.props.dispatchNextStepCreatePost()
    }
    
    render() {
        return (
            <React.Fragment>
                <PictureDropzone onDrop={this.onDrop} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       dispatchNextStepCreatePost: () => dispatch(nextStepCreatePost()),
       dispatchDropImage: (file) => dispatch(dropImage(file)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadImageContainer)
UploadImageContainer.propTypes = {
    dispatchNextStepCreatePost: PropTypes.func.isRequired,

}
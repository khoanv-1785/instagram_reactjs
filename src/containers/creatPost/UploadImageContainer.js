import React, { Component } from 'react'
import PictureDropzone from '../../components/DropPicture'
import { connect } from 'react-redux'
import { nextStepCreatePost } from '../../actions/createPostAction'
class UploadImageContainer  extends Component {

    onDrop = (files) => {
        console.log(files[0])
    }

    render() {
        return (
            <React.Fragment>
                <PictureDropzone onDrop={this.onDrop} />
                <button onClick={this.props.dispatchNextStepCreatePost}>Next</button>
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
       dispatchNextStepCreatePost: () => dispatch(nextStepCreatePost())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadImageContainer)
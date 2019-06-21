import React, { Component } from 'react'
import { connect } from 'react-redux'
import { prevStepCreateposts } from '../../actions/createPostAction'
class UpdateImageContainer extends Component {
    render() {
        return (
            <div>
                this is update image container
                <button onClick={this.props.dispatchPrevStepCreatePost}>Prev</button>
            </div>
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
        dispatchPrevStepCreatePost: () => dispatch(prevStepCreateposts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateImageContainer)
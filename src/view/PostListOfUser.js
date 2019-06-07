import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPostsByUsername } from '../actions/postActions'
class PostListOfUser extends Component {

    componentDidMount() {
        const { username } = this.props.match.params
        this.props.dispatchGetPostsByUsername(username, 1)
    }

    render() {
        return (
            <div>
                this is post list of user component
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchGetPostsByUsername: (username, pageNumber) => dispatch(getPostsByUsername(username, pageNumber))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListOfUser)

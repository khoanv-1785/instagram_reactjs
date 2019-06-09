import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HeaderProfileContainer from './HeaderProfileContainer'
import PhotoGirdProfileContainer from './PhotoGirdProfileContainer'
import { connect } from 'react-redux'
import { getPostsByUsername } from '../../actions/postActions'

class ProfilePage extends Component {

    componentDidMount() {
        const { username } = this.props
        this.props.dispatchGetPostsByUsername(username, 1)
    }

    render() {
        return (
            <div className="Profile__root container">
                 <HeaderProfileContainer />
                {/* hien thi danh sach cac bai post cua user */}
                <PhotoGirdProfileContainer />
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
       dispatchGetPostsByUsername: (username, pageNumber) => dispatch(getPostsByUsername(username, pageNumber)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)

ProfilePage.propTypes = {
    username: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
}
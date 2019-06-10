import React, { Component } from 'react'
import PhotoGirdItem from '../../components/PhotoGirdItem'
import Spinner from '../../components/Spinner'
import '../../styles/PhotoGird.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class PhotoGirdProfileContainer extends Component {
    render() {
        const { posts, profilePagination } = this.props
        return (
            <React.Fragment>
                <div className="PhotoGrid__root">
                    <div className="PhotoGrid__grid-container Locations__photo-gallery">
                        {
                            posts.map(post => {
                                return (
                                    <PhotoGirdItem
                                        key={post.id}
                                        avatarUrl={post.photoUrl}
                                        likesCount={post.likesCount}
                                        commentsCount={post.commentsCount}
                                    />
                                )
                            })
                        }
                    </div>

                </div>
                <div className="PhotoGallery__spinner-container">
                    <Spinner />
                </div>
            </React.Fragment>
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

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGirdProfileContainer)

PhotoGirdProfileContainer.propTypes = {
    posts: PropTypes.array.isRequired,
    profilePagination: PropTypes.object.isRequired,
}
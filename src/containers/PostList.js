import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/PhotoGallery.css'
import PostListItem from '../components/PostListItem';
import { fetchPosts, addComment } from '../actions/postActions'
import Spinner from '../components/Spinner'
import {
    getIsFetchingSelector,
    getCurrentPageSelector,
    getNextPageSelector,
    getTotalPagesSelector,
    getPostsSelector,
} from '../selector/postSelector'
class PostList extends Component {

    componentDidMount() {
        const { currentPage, isFetching } = this.props
        if (currentPage === 0) {
            this.props.dispatchFetchPosts(1)
        }
        if (!isFetching) {
            document.addEventListener('scroll', this.handleScrollFetchPosts)
        }
    }

    componentWillMount() {
        document.removeEventListener('scroll', this.handleScrollFetchPosts)
    }

    handleScrollFetchPosts = () => {
        const totalHeight = document.body.scrollHeight;
        const innerHeight = window.innerHeight;
        const scrollY = window.scrollY
        if (scrollY + innerHeight >= totalHeight) {
            const { currentPage, totalPages } = this.props
            if (currentPage < totalPages) {
                this.props.dispatchFetchPosts(currentPage + 1)
            }
        }
    }

    onAddComment = (postId, commentBody) => {
        this.props.dispatchAddComment(postId, commentBody)
    }

    render() {
        const { posts, isFetching } = this.props
        return (
            <React.Fragment>
                <div className="PhotoGallery__root">
                    {
                        posts.map(post => {
                            return (
                                <PostListItem
                                    key={post.id}
                                    post={post}
                                    handleAddComment={this.onAddComment}
                                />
                            )
                        })
                    }
                </div>
                {
                    isFetching ?
                        <div className="PhotoGallery__spinner-container">
                            <Spinner />
                        </div> : null
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: getIsFetchingSelector(state),
        currentPage: getCurrentPageSelector(state),
        nextPage: getNextPageSelector(state),
        posts: getPostsSelector(state),
        totalPages: getTotalPagesSelector(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchFetchPosts: (pageNumber) => dispatch(fetchPosts(pageNumber)),
        dispatchAddComment: (postId, commentBody) => dispatch(addComment(postId, commentBody)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostList)
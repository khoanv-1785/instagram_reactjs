import React, { Component } from 'react'
import CommentListItem from '../components/CommentListItem';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    loadMoreComment,
    deleteComment,
} from '../actions/postActions'
class CommentList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             currentPage: null,
             nextPage: null,
             totalPages: null,
             totalCount: null,
        }
    }

    componentDidMount() {
        const { currentPage, nextPage, totalCount, totalPages } = this.props.commentPagination
        this.setState({
            currentPage: currentPage,
            nextPage: nextPage,
            totalCount: totalCount,
            totalPages: totalPages,
        })
    }
    
    renderLoadMoreComment = () => {
        const { currentPage, totalCount, totalPages} = this.state
        const { postId } = this.props
        if (currentPage < totalPages) {
            return (
                <div 
                    className="GalleryItem__fetch-comments-link"
                    onClick={this.onLoadMoreComemnt}
                >
                    {
                        currentPage === 1 ? `View all ${totalCount} comments` : 'View more comments'
                    }
                </div>
            )
        }
    }

    onLoadMoreComemnt = () => {
        const { postId } = this.props
        const { currentPage } = this.state
        this.props.dispatchLoadMoreComment(postId, currentPage)
        this.setState({
            currentPage: currentPage + 1,
        })
    }

    dispatchDeleteComment = commentId => {
        const { postId } = this.props
        this.props.dispatchDeleteComment(postId, commentId)
        this.setState({
            totalCount: this.state.totalCount - 1,
        })
    }

    render() {
        const { comments } = this.props
        return (
            <div className="GalleryItem__comments">
                {
                    comments.map(comment => {
                        return (
                            <CommentListItem
                                key={comment.id}
                                comment={comment}
                                handleDeleteComment={this.dispatchDeleteComment}
                            />
                        )
                    })
                }
                {/* laod more comment of post */}
                <div className="GalleryItem__fetch-comments-link">
                    {this.renderLoadMoreComment()}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatchLoadMoreComment:(postId, currentPage) => dispatch(loadMoreComment(postId, currentPage)),
        dispatchDeleteComment: (postId, commentId) => dispatch(deleteComment(postId, commentId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)

CommentList.propTypes = {
    postId: PropTypes.number.isRequired,
    comments: PropTypes.array.isRequired,
    commentPagination: PropTypes.object.isRequired,
    dispatchLoadMoreComment: PropTypes.func.isRequired,
}

import React, { Component } from 'react'
import CommentListItem from '../components/CommentListItem';
import PropTypes from 'prop-types'

export default class CommentList extends Component {
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
        const { currentPage, totalCount, totalPages } = this.state
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
        this.props.loadMoreComment(postId, currentPage)
        this.setState({
            currentPage: currentPage + 1,
        })
    }

    render() {
        const { comments, postId } = this.props
        return (
            <div className="GalleryItem__comments">
                {
                    comments.map(comment => {
                        return (
                            <CommentListItem
                                key={comment.id}
                                comment={comment}
                                deleteComment={(commentId) => this.props.deleteComment(postId, commentId)}
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

CommentList.propTypes = {
    postId: PropTypes.number.isRequired,
    comments: PropTypes.array.isRequired,
    commentPagination: PropTypes.object.isRequired,
    loadMoreComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
}

import React, { Component } from 'react'
import CommentListItem from './CommentListItem';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

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
        if (currentPage < totalPages) {
            return (
                <div 
                    className="GalleryItem__fetch-comments-link"
                    onClick={() => this.onLoadMoreComment(currentPage)}
                >
                    {
                        currentPage === 1 ? `View all ${totalCount} comments` : 'View more comments'
                    }
                </div>
            )
        }
    }

    onLoadMoreComment = currentPage => {
        this.props.onLoadMoreComment(currentPage)
        this.setState({
            currentPage: this.state.currentPage + 1
        })
    }

    dispatchDeleteComment = (id) => {
        console.log(id)
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)

CommentList.propTypes = {
    postId: PropTypes.number.isRequired,
    onLoadMoreComment: PropTypes.func.isRequired,
    comments: PropTypes.array.isRequired,
    commentPagination: PropTypes.object.isRequired,

}
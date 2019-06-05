import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/CommentBox.css'

export default class CommentBox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             commentBody: ''
        }
    }

    handleChange = event => {
          this.setState({
              commentBody: event.target.value,
          })
    }

    handleKeyDown = event => {
       if(event.which === 13 && this.state.commentBody.trim().length > 0) {
           this.props.onSubmitCommentBox(this.props.postId, this.state.commentBody)
           this.setState({
               commentBody: ''
           })
       }
    }
    
    render() {
        const { commentBody } = this.state
        return (
            <div className="CommentBox__root">
                <input
                    className="CommentBox__input"
                    type="text"
                    name="comment"
                    placeholder="Add a comment..."
                    value={commentBody}
                    onChange={event => this.handleChange(event)}
                    onKeyDown={event => this.handleKeyDown(event)}
                />
            </div>
        )
    }
}

CommentBox.propTypes = {
    onSubmitCommentBox: PropTypes.func.isRequired,
}
import React, { Component } from 'react'
import '../styles/CommentItem.css'
import { Link } from 'react-router-dom'

export default class CommentListItem extends Component {
    render() {
        const { id, body, createdAt, userId, username } = this.props.comment
        const currentUser = JSON.parse(localStorage.getItem('currentUser'))
        const usernameCurrentUser = currentUser.attrs.username
        return (
            <div className="CommentItem__root">
                <strong><Link to={`/${username}`} className="CommentItem__username"> {username} </Link></strong>
                {body}
                {/* nut xoa commnent */}
                {
                    username === usernameCurrentUser ?
                        <span className="CommentItem__delete-button">
                            <i className="fa fa-times" />
                        </span>
                        : null
                }

                {/*  phan confirm de xac nhan xoa comment. */}
                {/* {this.props.deletable === true
                    ? (
                        <ConfirmationModal
                            isOpen={this.state.modalIsOpen}
                            onRequestClose={this.closeModal}
                            onConfirmClick={this.props.onDelete}
                            confirmText="Delete Comment"
                        />)
                    : null}  */}
            </div>
        )
    }
}

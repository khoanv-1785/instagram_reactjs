import React, { Component } from 'react'
import '../styles/CommentItem.css'
import { Link } from 'react-router-dom'

export default class CommentListItem extends Component {
    render() {
        return (
            <div className="CommentItem__root">
                <strong><Link to="/username" className="CommentItem__username">username</Link></strong>
                nguyen dang khoa ptit
              {/* nut xoa commnent */}
                <span className="CommentItem__delete-button">
                    <i className="fa fa-times" />
                </span>
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

import React, { Component } from 'react'
import '../styles/Home.css'
import Spinner from '../components/Spinner';
import PostList from '../containers/PostList';
import { connect } from 'react-redux'
import ConfirmModal from '../components/ConfirmModal';

export default class Home extends Component {
//    constructor(props) {
//        super(props)
   
//        this.state = {
//             isOpenConfirmModal: false
//        }
//    }

//    onOpenConfirmModal = () => {
//        this.setState({
//            isOpenConfirmModal: true
//        })
//    }

//    handleClickConfirm = () => {
//        console.log('confirm')
//    }

//    handleRequestConfirm = () => {
//        this.setState({
//            isOpenConfirmModal: false,
//        })
//    }

   
    render() {
        return (
            <div className="Home__root container">
                 <PostList />
                {/* <div className="PhotoGallery__spinner-container">
                    <Spinner />
                </div> */}
                {/* <button onClick={this.onOpenConfirmModal}>test confifrm modal</button>
                <ConfirmModal 
                    isOpen={isOpenConfirmModal}
                    onRequestClose={this.handleRequestConfirm}
                    onClickConfirm={this.handleClickConfirm}
                    confirmMessage="Delete Comment"
                    cancelMessage="cancel"

                /> */}
            </div>
        )
    }
}

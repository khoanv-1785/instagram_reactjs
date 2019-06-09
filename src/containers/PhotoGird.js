import React, { Component } from 'react'
import PhotoGirdItem from '../components/PhotoGirdItem';
import Spinner from '../components/Spinner'
import '../styles/PhotoGird.css'

export default class PhotoGird extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="PhotoGrid__root">
                    <div className="PhotoGrid__grid-container Locations__photo-gallery">
                        <PhotoGirdItem
                            avatarUrl="https://hackafy-app.s3.amazonaws.com/uploads/post/photo/691/anh1.jpeg"
                            likesCount="99"
                            commentsCount="99"
                        />
                        <PhotoGirdItem
                            avatarUrl="https://hackafy-app.s3.amazonaws.com/uploads/post/photo/691/anh1.jpeg"
                            likesCount="99"
                            commentsCount="99"
                        />
                        <PhotoGirdItem
                            avatarUrl="https://hackafy-app.s3.amazonaws.com/uploads/post/photo/691/anh1.jpeg"
                            likesCount="99"
                            commentsCount="99"
                        />
                        <PhotoGirdItem
                            avatarUrl="https://hackafy-app.s3.amazonaws.com/uploads/post/photo/691/anh1.jpeg"
                            likesCount="99"
                            commentsCount="99"
                        />
                    </div>

                </div>
                <div className="PhotoGallery__spinner-container">
                    <Spinner />
                </div>
            </React.Fragment>
        )
    }
}

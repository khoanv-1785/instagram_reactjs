import React, { Component } from 'react'
import '../styles/NewPostBoard.css'
import PictureDropzone from '../components/DropPicture'

export default class CreatNewPostContainer extends Component {

    onDrop = (files) => {
        console.log(files[0])
    }

    render() {
        return (
            <PictureDropzone onDrop={this.onDrop} />
        )
    }
}

import React, { Component } from 'react'
import '../styles/NewPostBoard.css'
import PictureDropzone from '../components/DropPicture'

export default class CreatNewPostContainer extends Component {
    render() {
        return (
            <div className="NewPostBoard__tab-panel">
                <div className="NewPostBoard__root">
                    <div className="row">
                        <div className="twelve columns">
                            <div className="NewPostBoard__dropzone-wrapper">
                                <PictureDropzone onDrop={this.onDrop} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

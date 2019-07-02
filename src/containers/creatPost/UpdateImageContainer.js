import React, { Component } from 'react'
import { connect } from 'react-redux'
import { prevStepCreateposts } from '../../actions/createPostAction'
import imageDefault from '../../images/default-avatar.png'
import {
    getImageSrcSelector,
    getStylesSelector,
} from '../../selector/createPostSelector'
import { getFilterStyles } from '../../ultis/filter'
class UpdateImageContainer extends Component {
    render() {
        const { imageSrc, styles } = this.props
        const {brightness, contrast, saturation, sepia, hueRotate, grayScale } = styles
        return (
            <div>
                <div className="NewPostBoard__root">
                    <div className="row">
                        <div className="twelve columns">
                            <div className="NewPostBoard__dropzone-row">
                                <div>
                                    <button
                                        onClick={this.props.dispatchPrevStepCreatePost}
                                        className="NewPostBoard__back-button">
                                        <i className="fa fa-arrow-left" /> Back
                                    </button>
                                </div>
                                <div>
                                    <button
                                        // onClick={}
                                        // disabled={this.props.isUploading}
                                        className="NewPostBoard__share-button">
                                        <i className="fa fa-spinner fa-pulse fa-3x fa-fw NewPostBoard__spinner" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row NewPostBoard__step-two-main-container">
                            <div className="six columns">
                                <h2 className="NewPostBoard__preview-text">Preview</h2>
                                <div className="NewPostBoard__preview-card">
                                    <div className="NewPostBoard__preview-card-header">
                                        <div className="NewPostBoard__preview-card-avatar-container">
                                            <img
                                                src={imageDefault}
                                                className="NewPostBoard__preview-card-avatar-img"
                                                alt=""
                                            />
                                        </div>
                                        <div className="GalleryItem-header__metadata-container">
                                            <div className="GalleryItem-header__username">
                                                <span>username</span>
                                            </div>
                                            {/* cho hien thi addrees */}
                                            {/* {this.state.address.trim().length > 0
                                                ? (<div><span>{this.state.address}</span></div>)
                                                : null} */}
                                        </div>
                                    </div>
                                    <div className="NewPostBoard__dropzone-wrapper">
                                        <div
                                            className="GalleryItem__body"
                                            style={getFilterStyles(brightness, contrast, saturation, sepia, hueRotate, grayScale)}
                                            >
                                            <img src={imageSrc} role="presentation" alt="" />
                                        </div>
                                    </div>
                                    {/* {this.state.caption.trim().length > 0
                                        ? (
                                            <div className="NewPostBoard__preview-card-footer">
                                                <strong>username</strong> this.state.caption
                                            </div>
                                        ) : null} */}
                                </div>
                            </div>
                            <div className="six columns NewPostBoard__caption-location-container">
                                this.renderCaptionField()
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        imageSrc: getImageSrcSelector(state),
        styles: getStylesSelector(state),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatchPrevStepCreatePost: () => dispatch(prevStepCreateposts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateImageContainer)
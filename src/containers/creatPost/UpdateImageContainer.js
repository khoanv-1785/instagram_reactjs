import React, { Component } from 'react'
import { connect } from 'react-redux'
import { prevStepCreateposts } from '../../actions/createPostAction'
import imageDefault from '../../images/default-avatar.png'
import {
    getImageSrcSelector,
    getStylesSelector,
    getLocationSelector,
    getCaptionSelector,
} from '../../selector/createPostSelector'
import {
    changeCaption,
    changeLocation,
} from '../../actions/createPostAction'
import { getFilterStyles } from '../../ultis/filter'
class UpdateImageContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isUploading: false,
        }
    }



    onUploadPost = () => {
        this.setState({
            isUploading: true,
        })
        
    }

    onChangeText = event => {
        const { name, value } = event.target 
        if(name === 'location') {
            this.props.dispatchChangeLocation(value)
        } else {
            this.props.dispatchChangeCaption(value)
        }
    }

    render() {
        const { imageSrc, styles, location, caption } = this.props
        const { brightness, contrast, saturation, sepia, hueRotate, grayScale } = styles
        const { isUploading } = this.state
        const currentUser = JSON.parse(localStorage.getItem('currentUser'))
        const { avatarUrl, username } = currentUser.attrs
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
                                        onClick={this.onUploadPost}
                                        disabled={isUploading}
                                        className="NewPostBoard__share-button">
                                        {
                                            isUploading ? <i className="fa fa-spinner fa-pulse fa-3x fa-fw NewPostBoard__spinner" /> : 'Share'
                                        }
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
                                                src={avatarUrl ? avatarUrl : imageDefault}
                                                className="NewPostBoard__preview-card-avatar-img"
                                                alt=""
                                            />
                                        </div>
                                        <div className="GalleryItem-header__metadata-container">
                                            <div className="GalleryItem-header__username">
                                                <span>{username}</span>
                                            </div>
                                            {/* cho hien thi addrees ngay duoi username */}
                                            <div><span>{location.trim()}</span></div>
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
                                    {/* hien thi caption ngay duoi hinh anh */}
                                    {
                                        caption.trim().length > 0 ? (
                                            <div className="NewPostBoard__preview-card-footer">
                                                <strong>{username} : </strong>{caption.trim()}
                                            </div>
                                        ) : null
                                    }
                                </div>
                            </div>
                            <div className="six columns NewPostBoard__caption-location-container">
                                <div>
                                    <label>Location</label>
                                    <input
                                        type="text"
                                        value={location}
                                        onChange={this.onChangeText}
                                        name="location"
                                        className="NewPostBoard__address-input NewPostBoard__place-autocomplete-container"
                                    />
                                    <div>
                                        <label>Caption </label>
                                        <textarea
                                            value={caption}
                                            name="caption"
                                            onChange={this.onChangeText}
                                            placeholder="Caption(optional)"
                                            className="NewPostBoard__caption-box"
                                            style={{ resize: 'none' }}
                                        />
                                    </div>
                                </div>
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
        location: getLocationSelector(state),
        caption: getCaptionSelector(state),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatchPrevStepCreatePost: () => dispatch(prevStepCreateposts()),
        dispatchChangeLocation: (location) => dispatch(changeLocation(location)),
        dispatchChangeCaption: (caption) => dispatch(changeCaption(caption)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateImageContainer)
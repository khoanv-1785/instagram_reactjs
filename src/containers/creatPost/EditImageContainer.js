import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    nextStepCreatePost,
    prevStepCreateposts,
    editImage,
    resetEditImage,
} from '../../actions/createPostAction'
import Slider from 'material-ui/Slider'
import TabButton from '../../components/TabButton'
import PropTypes from 'prop-types'
import {
    getImageFileSelector,
    getStylesSelector,
    getImageSrcSelector,
} from '../../selector/createPostSelector'
import _isEmpty from 'lodash/isEmpty'
import { getImageReviewStyle} from '../../ultis/filter'
import FilterButton from '../../components/FilterButton'
import { listFilter } from '../../config/filter';

class EditImageContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageSrc: '',
            selectedTab: 'edit',
            styles: {
                brightness: 1,
                contrast: 1,
                saturation: 1,
                hueRotate: 0,
                grayScale: 0,
                sepia: 0,
            }
        }
    }

    componentDidMount() {
        const { imageSrc, styles } = this.props
        const reader = new FileReader()
        reader.addEventListener("load", () => {
            const imageSrc = reader.result
            this.setState({
                imageSrc: imageSrc,
            })
        }, false);
        reader.readAsDataURL(this.props.imageFile); // Converting file into data URL
        if(!_isEmpty(imageSrc) && !_isEmpty(styles)) {
            this.setState({
                imageSrc: imageSrc,
                selectedTab: 'edit',
                styles: styles
            })
        }
    }

    changeTabSelected = tab => {
        this.setState({
            selectedTab: tab
        })
    }

    handleChangeBrightness = (event, value) => {
        this.setState({
            ...this.state,
            styles: {
                ...this.state.styles,
                brightness: value,
            }
        })
    }

    handleChangeContrast = (event, value) => {
        this.setState({
            ...this.state,
            styles: {
                ...this.state.styles,
                contrast: value,
            }
        })
    }

    handleChangeSaturation = (event, value) => {
        this.setState({
            ...this.state,
            styles: {
                ...this.state.styles,
                saturation: value,
            }
        })
    }

    handleIFilterItemClick = (item) => {
        this.setState({
            ...this.state,
            styles: {
                brightness: item.brightness,
                contrast: item.contrast,
                saturation: item.saturate,
                hueRotate: item.hueRotate,
                grayScale: item.grayScale,
                sepia: item.sepia,
            }
        })
    }

    handleNextStepCreatePost = () => {
        const { imageSrc, styles } = this.state
        const imageData = {
            imageSrc: imageSrc,
            styles: styles,
        }
        this.props.dispatchEditImage(imageData)
        this.props.dispatchNextStepCreatePost()
    }

    handlePrevStepCreatePost = () => {
         this.props.dispatchPrevStepCreatePost()
         this.props.dispatchResetEditImage()
    }

    renderTabPanel = () => {
        const { imageSrc, selectedTab, styles: { brightness, contrast, saturation } } = this.state
        if (selectedTab === 'edit') {
            return (
                <div className="NewPostBoard__tab-panel">
                    <div className="NewPostBoard__slider-item">
                        <label className="NewPostBoard__slider-label">
                            <i className="fa fa-sun-o NewPostBoard__slider-icon" aria-hidden="true" /> Brightness
                        </label>
                        <Slider
                            defaultValue={1.0}
                            value={brightness}
                            onChange={this.handleChangeBrightness}
                            min={0.1}
                            max={2.00}
                            step={0.01}
                        />
                    </div>

                    <div className="NewPostBoard__slider-item">
                        <label className="NewPostBoard__slider-label">
                            <i className="fa fa-adjust NewPostBoard__slider-icon" aria-hidden="true" /> Contrast
                        </label>
                        <Slider
                            defaultValue={1.0}
                            value={contrast}
                            onChange={this.handleChangeContrast}
                            min={0.1}
                            max={2.00}
                            step={0.01}
                        />
                    </div>

                    <div className="NewPostBoard__slider-item">
                        <label className="NewPostBoard__slider-label">
                            <i className="fa fa-tint NewPostBoard__slider-icon" aria-hidden="true" /> Saturation
                        </label>
                        <Slider
                            defaultValue={1.0}
                            value={saturation}
                            onChange={this.handleChangeSaturation}
                            min={0.1}
                            max={2}
                            step={0.01}
                        />
                    </div>
                </div>
            )
        } else {
            return (
                <div className="NewPostBoard__filters">
                    {
                        listFilter.map(item => (
                            <FilterButton
                                key={Math.random()}
                                active={true}
                                styles={getImageReviewStyle(imageSrc, item.brightness, item.contrast, item.saturate, item.sepia, item.hueRotate, item.grayscale)}
                                onClick={() => this.handleIFilterItemClick(item)}
                            >
                                {item.label}
                            </FilterButton>
                        ))
                    }
                </div>
            )
        }
    }

    render() {
        const { imageSrc, selectedTab, styles: { brightness, contrast, saturation, hueRotate, grayScale, sepia } } = this.state
        return (
            <div>
                <div className="NewPostBoard__root">
                    <div className="row">
                        <div className="twelve columns">
                            <div className="NewPostBoard__dropzone-row">
                                <div>
                                    <button
                                        onClick={this.handlePrevStepCreatePost}
                                        className="NewPostBoard__back-button"
                                    >
                                        <i className="fa fa-arrow-left" />
                                        Back
                                        </button>
                                </div>
                                <div className="NewPostBoard__dropzone-wrapper">
                                    <div className="NewPostBoard__edit-preview">
                                        <figure
                                            className="NewPostBoard__preview-filter"
                                        >
                                            <div
                                                className="NewPostBoard__preview-img"
                                                style={getImageReviewStyle(imageSrc, brightness, contrast, saturation, sepia, hueRotate, grayScale)}
                                            >
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        onClick={this.handleNextStepCreatePost}
                                        className="NewPostBoard__next-button"
                                    >
                                        Next <i className="fa fa-arrow-right" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="twelve columns">
                            <div className="NewPostBoard__tabs">
                                <TabButton
                                    className={(selectedTab === 'filter') ? 'NewPostBoard__tab NewPostBoard__tab--active' : 'NewPostBoard__tab'}
                                    onClick={() => this.changeTabSelected('filter')}
                                >
                                    Filter
                                </TabButton>
                                <TabButton
                                    className={(selectedTab === 'edit') ? 'NewPostBoard__tab NewPostBoard__tab--active' : 'NewPostBoard__tab'}
                                    onClick={() => this.changeTabSelected('edit')}
                                >
                                    Edit
                                </TabButton>
                            
                            </div>
                            {/* {this.renderTabPanel()} */}
                            {this.renderTabPanel()}
                            {/* ket thuc phan tab */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        imageFile: getImageFileSelector(state),
        styles: getStylesSelector(state),
        imageSrc: getImageSrcSelector(state),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatchNextStepCreatePost: () => dispatch(nextStepCreatePost()),
        dispatchPrevStepCreatePost: () => dispatch(prevStepCreateposts()),
        dispatchEditImage: (imageData) => dispatch(editImage(imageData)),
        dispatchResetEditImage: () => dispatch(resetEditImage()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditImageContainer)
EditImageContainer.propTypes = {
    imageFile: PropTypes.object.isRequired,
    dispatchNextStepCreatePost: PropTypes.func.isRequired,
    dispatchPrevStepCreatePost: PropTypes.func.isRequired,
}

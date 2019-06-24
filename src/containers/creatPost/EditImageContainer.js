import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    nextStepCreatePost,
    prevStepCreateposts,
} from '../../actions/createPostAction'
import Slider from 'material-ui/Slider'
import TabButton from '../../components/TabButton'
import PropTypes from 'prop-types'
import {
    getImageFileSelector,
} from '../../selector/createPostSelector'
import { getImagePreview } from '../../ultis/filter'
class EditImageContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            imageSrc: '',
            selectedTab: 'filter',
            styles: {
                brightness: 1.0,
                contrast: 1.0,
                saturation: 1.0
            }
        }
    }
    componentDidMount() {
        const reader = new FileReader()
        reader.addEventListener("load", () => {
            const imageSrc = reader.result
            this.setState({
                imageSrc: imageSrc,
            })
        }, false);
        reader.readAsDataURL(this.props.imageFile); // Converting file into data URL
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
    renderTabPanel = () => {
        const { selectedTab, styles: { brightness, contrast, saturation } } = this.state
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
                        // disabled={this.state.files.length === 0}
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
                            name="contrast"
                        // disabled={this.state.files.length === 0}
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
                            min={0.00}
                            max={2.00}
                            step={0.01}
                        // disabled={this.state.files.length === 0}
                        />
                    </div>
                </div>
            )
        } else {
            return (
                <div className="NewPostBoard__filters">
                    nguyen dang khoa hoc vien cong nghe buu chinh vien thong
                </div>
            )
        }
    }

    render() {
        const { imageSrc, selectedTab, styles: { brightness, contrast, saturation }} = this.state
        return (
            <div>
                <div className="NewPostBoard__root">
                    <div className="row">
                        <div className="twelve columns">
                            <div className="NewPostBoard__dropzone-row">
                                <div>
                                    <button
                                        onClick={this.props.dispatchPrevStepCreatePost}
                                        className="NewPostBoard__back-button"><i className="fa fa-arrow-left" /> Back</button>
                                </div>
                                <div className="NewPostBoard__dropzone-wrapper">
                                    <div className="NewPostBoard__edit-preview">
                                        <figure
                                            className="NewPostBoard__preview-filter"
                                        // className={`NewPostBoard__preview-filter ${this.state.filter}`}
                                        // style={getFilterStyle(this.state.filterStyle)}
                                        >
                                            <div
                                                className="NewPostBoard__preview-img"
                                                style={getImagePreview(imageSrc, brightness, contrast, saturation)}
                                            >
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        onClick={this.props.dispatchNextStepCreatePost}
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
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatchNextStepCreatePost: () => dispatch(nextStepCreatePost()),
        dispatchPrevStepCreatePost: () => dispatch(prevStepCreateposts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditImageContainer)
EditImageContainer.propTypes = {
    imageFile: PropTypes.object.isRequired,
    dispatchNextStepCreatePost: PropTypes.func.isRequired,
    dispatchPrevStepCreatePost: PropTypes.func.isRequired,
}
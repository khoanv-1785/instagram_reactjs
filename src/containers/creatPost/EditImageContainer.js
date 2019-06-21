import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    nextStepCreatePost,
    prevStepCreateposts,
} from '../../actions/createPostAction'
import Slider from 'material-ui/Slider'
import TabButton from '../../components/TabButton'
class EditImageContainer extends Component {
    render() {
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
                                            // style={{ backgroundImage: `url(${this.state.files[0].preview})` }}
                                            >
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        onClick={this.props.dispatchNextStepCreatePost}
                                        className="NewPostBoard__next-button">Next <i className="fa fa-arrow-right" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="twelve columns">
                            <div className="NewPostBoard__tabs">
                                <TabButton
                                    className="NewPostBoard__tab"
                                // onClick={() => this._setTab('filter')}
                                // active={this.state.selectedTab === 'filter'}
                                >
                                    Filter
                                </TabButton>
                                <TabButton
                                    className="NewPostBoard__tab"
                                // onClick={() => this._setTab('edit')}
                                // active={this.state.selectedTab === 'edit'}
                                >
                                    Edit
                                </TabButton>
                            </div>
                            {/* {this.renderTabPanel()} */}
                            <div className="NewPostBoard__tab-panel">
                                <div className="NewPostBoard__slider-item">
                                    <label className="NewPostBoard__slider-label">
                                        <i className="fa fa-sun-o NewPostBoard__slider-icon" aria-hidden="true" /> Brightness
                                    </label>
                                    <Slider
                                        defaultValue={1.0}
                                        value={1.5}
                                        // onChange={this.onBrightnessChange}
                                        min={0.20}
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
                                        value={1.0}
                                        // onChange={this.onContrastChange}
                                        min={0.20}
                                        max={2.00}
                                        step={0.01}
                                        // disabled={this.state.files.length === 0}
                                    /> 
                                </div>

                                <div className="NewPostBoard__slider-item">
                                    <label className="NewPostBoard__slider-label">
                                        <i className="fa fa-tint NewPostBoard__slider-icon" aria-hidden="true" /> Saturation
                                    </label>
                                    <Slider
                                        defaultValue={1.0}
                                        value={2.35}
                                        // onChange={this.onSaturationChange}
                                        min={0.00}
                                        max={3.00}
                                        step={0.01}
                                        // disabled={this.state.files.length === 0}
                                    /> 
                                </div>
                            </div>
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
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatchNextStepCreatePost: () => dispatch(nextStepCreatePost()),
        dispatchPrevStepCreatePost: () => dispatch(prevStepCreateposts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditImageContainer)
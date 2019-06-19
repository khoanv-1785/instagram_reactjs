import React from 'react'
import PropTypes from 'prop-types'
import Dropzone from 'react-dropzone'

const DropPicture = ({ onDrop }) => {
    return (
        <Dropzone
            className="NewPostBoard__dropzone"
            onDrop={onDrop}
            multiple={false}
            accept="image/*">
            {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                    <div className="NewPostBoard__dropzone-inner-wrapper">
                        <div className="NewPostBoard__dropzone-inner-content">
                            <div>
                                <i className="fa fa-camera NewPostBoard__dropzone-icon" aria-hidden="true" />
                            </div>
                            <div className="NewPostBoard__dropzone-text">Upload Picture</div>
                        </div>
                        <input type="file" accept="image/*" style={{display: 'none'}} />
                    </div>
                </div>
            )}
        </Dropzone>
    )
}

DropPicture.propTypes = {
    onDrop: PropTypes.func.isRequired,
}
export default DropPicture
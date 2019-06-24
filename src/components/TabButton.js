import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types'

const TabButton = (props) => {
    const className = classNames({
        [props.className]: true,
        [`${props.className}--active`]: props.active,
    });
    return (
        <button
            className={className}
            onClick={props.onClick}>
            {props.children}
        </button>
    );
}

TabButton.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string.isRequired,
}

export default TabButton;
import React from 'react'
import PropTypes from 'prop-types'
import '../styles/FilterButton.css'

const FilterButton = (props) => {
  let className = `FilterButton__button`;
  if (props.active) {
    className += ' FilterButton__button--active';
  }
  return (
    <button
      className={className}
      style={props.styles}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
}
export default FilterButton;
FilterButton.propTypes = {
  styles: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}
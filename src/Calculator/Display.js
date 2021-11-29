import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Calculator/_display.scss'


const Display = (props) => (
    <div className="display">
        <div className="display-expression">{props.expression}</div>
        <div className={"display-value " + (props.value.length >= 12 ? 'smaller' : '')}>{props.value}</div>
    </div>
);

Display.defaultProps = {
    expression: '',
    value: '0'
};

Display.propTypes = {
    expression: PropTypes.string,
    value: PropTypes.string
};

export default Display;
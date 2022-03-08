import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Calculator/_control-panel.scss';

const ControlPanel = (props) => (
    <div className="control-panel">
        {/* button for potential open close history */}
        {/* <button className="open-history" onClick={props.onMenuToggle}>
            <img src={History}/>
        </button> */}
    </div>
);

ControlPanel.defaultProps = {
    anyHistory: false,
    onToggleHistory: () => alert('toggle history')
};

ControlPanel.propTypes = {
    anyHistory: PropTypes.bool,
    onToggleHistory: PropTypes.func
};

export default ControlPanel;
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Calculator/_keypad.scss'
import Backspace from '../assets/backspace.svg'


const Keypad = (props) => {

    const handleOnDigit = (e) => {
        props.onDigit(e.target.value);
    };

    return (
        <div className="keypad">
            <div className="keypad-row">
                <button className="secondary" value="clear" onClick={props.onClear}>CE</button>
                <button className="secondary" value="clear-all" onClick={props.onClearAll}>C</button>
                <button className="secondary" value="backspace" onClick={props.onDelete}><img src={Backspace}/></button>
                <button className="secondary" value="/" onClick={props.onDivide}>&divide;</button>
            </div>
            <div className="keypad-row">
                <button  className="primary" accesskey="h" value="7" onClick={handleOnDigit}>7</button>
                <button className="primary" value="8" onClick={handleOnDigit}>8</button>
                <button className="primary" value="9" onClick={handleOnDigit}>9</button>
                <button className="secondary" value="*" onClick={props.onMultiply}>&times;</button>
            </div>
            <div className="keypad-row">
                <button className="primary" value="4" onClick={handleOnDigit}>4</button>
                <button className="primary" value="5" onClick={handleOnDigit}>5</button>
                <button className="primary" value="6" onClick={handleOnDigit}>6</button>
                <button className="secondary" value="-" onClick={props.onSubtract}>&minus;</button>
            </div>
            <div className="keypad-row">
                <button className="primary" value="1" onClick={handleOnDigit}>1</button>
                <button className="primary" value="2" onClick={handleOnDigit}>2</button>
                <button className="primary" value="3" onClick={handleOnDigit}>3</button>
                <button className="secondary" value="+" onClick={props.onAdd}>&#43;</button>
            </div>
            <div className="keypad-row">
                <button className="secondary" value="+-" onClick={props.onToggleSign}>&plusmn;</button>
                <button className="primary" value="0" onClick={handleOnDigit}>0</button>
                <button className="secondary" value="." onClick={props.onDecimalPoint}>.</button>
                <button className="secondary equals" value="=" onClick={props.onEquals}>=</button>
            </div>
        </div>
    );
};

Keypad.defaultProps = {
    onDigit: digit => alert(digit),
    onClear: () => alert('clear'),
    onClearAll: () => alert('clear-all'),
    onDelete: () => alert('delete'),
    onAdd: () => alert('add'),
    onEquals: () => alert('equals'),
    onDecimalPoint: () => alert('.'),
    onSubtract: () => alert('subtract'),
    onToggleSign: () => alert('+/-'),
    onDivide: () => alert('/'),
    onMultiply: () => alert('*')
};

Keypad.propTypes = {
    onDigit: PropTypes.func,
    onClear: PropTypes.func,
    onClearAll: PropTypes.func,
    onDelete: PropTypes.func,
    onAdd: PropTypes.func,
    onEquals: PropTypes.func,
    onDecimalPoint: PropTypes.func,
    onSubtract: PropTypes.func,
    onDivide: PropTypes.func,
    onMultiply: PropTypes.func,
    onToggleSign: PropTypes.func
};

export default Keypad;
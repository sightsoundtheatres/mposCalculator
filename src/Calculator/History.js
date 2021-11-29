import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Calculator/_history.scss'
import Delete from '../assets/close.svg'

const History = (props) => (
    <div className={`history ${props.isHistoryOpen === true ? ' opened' : ''}`}>
        {
            props.history.map((expression, i) => {
                return (
                    <div>
                        <div className="history-item" key={i}>
                            <button className="history-block" onClick={() => props.onSelected(i)}>
                                <div>
                                    <div>{expression.expression}&nbsp;=</div>
                                    <div>{expression.result}</div>
                                </div>
                            </button>
                            
                        </div>
                    </div>
                );
            })                                    
        }
    </div>
);

History.defaultProps = {
    history: [],
    onClearHistory: () => alert('clear history'),
    onSelected: () => alert('selected'),
    isHistoryOpen: true
};

History.propTypes = {
    history: PropTypes.array,
    onClearHistory: PropTypes.func,
    onSelected: PropTypes.func
};

export default History;
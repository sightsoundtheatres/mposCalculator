import React from 'react';
import Calculator from './Calculator/Calculator';
import './styles/app.scss';

const App = () => (
    <div>
        {/* <img style={{width: '100%', minHeight: '100%', objectFit: 'cover', position: 'absolute', left: '0', top: '0'}} src="https://wallpaperaccess.com/full/31189.jpg"/>
        <div style={{top: '50%', left: '50%', position: 'absolute', transform: 'translate(-50%,-50%)'}}>
            <Calculator />
        </div> */}

        <Calculator />

    </div>
);

export default App;
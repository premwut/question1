import React from 'react';

import Input from './Input';
import Result from './Result';
import '../styles/App.css';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Input />
                <Result />
            </div>
        )
    }
}

export default App;
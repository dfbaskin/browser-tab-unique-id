import React, {Component} from 'react';
import './App.css';
import {getUniqueId} from './unique-id';

class App extends Component {

    constructor() {
        super();
        this.state = {
            uniqueId: getUniqueId()
        };
    }

    render() {
        let {uniqueId} = this.state;
        return (
            <div className="App">
                <div>Unique ID</div>
                <div><pre>{uniqueId}</pre></div>
            </div>
        );
    }
}

export default App;

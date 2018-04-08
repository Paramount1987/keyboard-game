import React, { Component } from 'react';
import store    from './store';
import {Provider}   from 'react-redux';

import './App.css';

import Welcome  from './Containers/Welcome';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">

                    <header className="App-header">
                        <h1 className="App-title">Keyboard Game!</h1>
                    </header>

                    <Welcome />
                </div>
            </Provider>
        );
    }
}

export default App;

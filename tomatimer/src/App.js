import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer';

class App extends Component {
    render() { 
        return (
            <div>
                <Timer duration="45" title="pomodoro" />
                <Timer duration="5" title="courte pause" />
                <Timer duration="10" title="longue pause" />
            </div>
        );
    }
}
 
export default App;
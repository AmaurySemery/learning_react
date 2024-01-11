import React, { Component } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Timer from './components/Timer';

class App extends Component {
    render() { 
        return (
            <div>
                <ToastContainer />
                <Timer duration="45" title="pomodoro" />
                <Timer duration="5" title="courte pause" />
                <Timer duration="10" title="longue pause" />
            </div>
        );
    }
}
 
export default App;
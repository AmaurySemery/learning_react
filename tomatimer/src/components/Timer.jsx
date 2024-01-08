import React, { Component } from 'react';

class Timer extends Component {
    state = { 
        duration: 5
     };

    render() { 
        return (
            <div>
                <h2>tomatimer !!</h2>
                {this.state.duration}
            </div>
        );
    }
}
 
export default Timer;
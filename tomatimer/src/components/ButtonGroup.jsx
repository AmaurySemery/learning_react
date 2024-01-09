import React, { Component } from 'react';

class ButtonGroup extends Component {
    state = {  } 
    render() { 
        console.log(this.props);
        // onClick appelle une fonction qui est mise à disposition à l'aide des props puis du parent
        return (
        <div>
            <button onClick={this.props.onStart}>start</button>
            <button onClick={this.props.onStop}>stop</button>
            <button onClick={this.props.onReset}>reset</button>
        </div>);
    }
}
 
export default ButtonGroup;
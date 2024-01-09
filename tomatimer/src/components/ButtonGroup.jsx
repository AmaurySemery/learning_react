import React, { Component } from 'react';
import Button from './Button';

class ButtonGroup extends Component {
    render() { 
        console.log(this.props);
        // onClick appelle une fonction qui est mise à disposition à l'aide des props puis du parent
        return (
        <div>
            <Button text="start" onBtnClick={this.props.onStart} />
            <Button text="stop" onBtnClick={this.props.onStop} />
            <Button text="reset" onBtnClick={this.props.onReset} />
        </div>);
    }
}
 
export default ButtonGroup;
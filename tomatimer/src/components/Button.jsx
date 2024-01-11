import React, { Component } from 'react';

// Peu d'intérêt à ce composant dans les faits, mais pour montrer la logique de création d'un component

class Button extends Component {
    render() { 
        return (
            <button onClick={this.props.onBtnClick} className={this.props.btnCssClasses} >{this.props.text}</button>
        );
    }
}
 
export default Button;
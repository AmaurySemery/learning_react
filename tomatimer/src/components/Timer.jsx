import React, { Component } from 'react';
import ButtonGroup from './ButtonGroup';

class Timer extends Component {
    // Les fonctions qui modifient l'état doivent rester dans la classe qui comporte l'état, règle fondamentale de React
    state = {
        initialValue: 10,
        duration: 10,
        handle: 0,
        message: ''
      };

    componentWillUnmount() {
        this.clean();
    }

    count = () => {
        this.setState({
          duration: parseInt(this.state.duration, 10) -1
        });
        if(this.state.duration === 0) {
          this.clean();
          this.setState({
            duration: this.state.initialValue
          });
        }
      };

      clean = (message) => {
        clearInterval(this.state.handle);   
        this.setState({
          message: message
        })
      }

      start = () => {
        const handle = setInterval(() => {
            // Appel d'une méthode
            this.count()
        // Fonction(s) appelée(s) toutes les secondes
        }, 1000);
        // Sauvegarde dans notre état le handle en lui disant qu'il a pour valeur le handle déclaré plus haut
        this.setState({
            handle: handle,
            message: ''
        });
      }

      stop = () => {
        this.clean('Mis en pause');
      }

      reset = () => {
        this.clean();
        this.setState({
            duration: this.state.initialValue,
            message: 'Compteur réinitialisé'
        })
      }

    render() { 
        return (
            <div>
                <h2>tomatimer</h2>
                <h3>{this.state.message}</h3>
                <div>Durée : {this.state.duration}</div>

                <ButtonGroup onStart={this.start} onStop={this.stop} onReset={this.reset} />
            </div>
        );
    }
}
 
export default Timer;
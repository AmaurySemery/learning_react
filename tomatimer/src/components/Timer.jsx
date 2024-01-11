import React, { Component } from 'react';
import { toast } from 'react-toastify';

import ButtonGroup from './ButtonGroup';
import Display from './Display';
import Message from './Message';

class Timer extends Component {
    // Les fonctions qui modifient l'état doivent rester dans la classe qui comporte l'état, règle fondamentale de React
    state = {
        initialValue: 10,
        duration: 10,
        handle: 0,
        message: ''
      };

      notify = (text, type) => {
        toast[type](text, { autoClose: 1500 }); // toast.error => toast['error']
      }

      prependZero = value => {
        return value < 10 ? "0" + value.toString() : value.toString();
      }

      formatDuration = () => {
        const minutes = Math.floor(this.state.duration / 60);
        const seconds = Math.floor(this.state.duration % 60);
        return `${this.prependZero(minutes)}:${this.prependZero(seconds)}`;
      }

    componentDidMount() {
      this.setState({
        initialValue: parseInt(this.props.duration, 10) * 60,
        duration: parseInt(this.props.duration, 10) * 60
      })
        
      }

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
        this.notify("Démarrage du compteur !", 'success');
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
        this.notify("Compteur mis en pause !", 'warning');
        this.clean('Mis en pause');
      }

      reset = () => {
        this.notify("Reset du compteur !", 'error');
        this.clean();
        this.setState({
            duration: this.state.initialValue,
            message: 'Compteur réinitialisé'
        })
      }

    render() { 
        return (
            <div>
                <Display title={this.props.title} timerValue={this.formatDuration()} />
                <ButtonGroup onStart={this.start} onStop={this.stop} onReset={this.reset} />
                <Message text={this.state.message} />
            </div>
        );
    }
}
 
export default Timer;
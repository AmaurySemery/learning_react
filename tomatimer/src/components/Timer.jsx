import React, { Component } from 'react';

class Timer extends Component {
    state = {
        initialValue: 5,
        duration: 5,
        handle: 0,
        message: ''
      };

    componentDidMount() {
        const handle = setInterval(() => {
            // Appel d'une méthode
            this.count()
        // Fonction(s) appelée(s) toutes les secondes
        }, 1000);
        // Sauvegarde dans notre état le handle en lui disant qu'il a pour valeur le handle déclaré plus haut
        this.setState({
            handle: handle
        });
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

      clean = (message = 'Compte à rebours réinitialisé') => {
        clearInterval(this.state.handle);   
        this.setState({
          message: message
        })
      }

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
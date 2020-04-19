import React, { Component } from 'react';
import './Board.scss';

export default class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            player: 1,
            finished: false
        };
    }

    jugarToken(event) {
        const tokens = document.querySelectorAll('button.token');
        const token = event.target;
        const current = this.state.player;
        token.dataset.player = current;      
        let finish = this.comprobarPosiciones(tokens, current);
        if(finish) {
            this.setState({ finished: true });
        }
        const that = this;
        setTimeout( () => {
            if(!that.state.finished) {
                if(current === 1) {            
                    that.setState({ player: 2 });
                } else {
                    that.setState({ player: 1 });
                } 
            }   
        }, 0 );
    }

    comprobarPosiciones(tokens, current) {  
        if(
            (parseInt(tokens[0].dataset.player) === current && parseInt(tokens[1].dataset.player) === current && parseInt(tokens[2].dataset.player) === current) ||
            (parseInt(tokens[3].dataset.player) === current && parseInt(tokens[4].dataset.player) === current && parseInt(tokens[5].dataset.player) === current) ||
            (parseInt(tokens[6].dataset.player) === current && parseInt(tokens[7].dataset.player) === current && parseInt(tokens[8].dataset.player) === current) ||
            (parseInt(tokens[0].dataset.player) === current && parseInt(tokens[3].dataset.player) === current && parseInt(tokens[6].dataset.player) === current) ||
            (parseInt(tokens[1].dataset.player) === current && parseInt(tokens[4].dataset.player) === current && parseInt(tokens[7].dataset.player) === current) ||
            (parseInt(tokens[2].dataset.player) === current && parseInt(tokens[5].dataset.player) === current && parseInt(tokens[8].dataset.player) === current) ||
            (parseInt(tokens[0].dataset.player) === current && parseInt(tokens[4].dataset.player) === current && parseInt(tokens[8].dataset.player) === current) ||
            (parseInt(tokens[2].dataset.player) === current && parseInt(tokens[4].dataset.player) === current && parseInt(tokens[6].dataset.player) === current)
        ) {
            return true;
        }
        return false;
    }

    restartGame() {
        const tokens = document.querySelectorAll('button.token');
        for (const token of tokens) {
            token.dataset.player = 0;
        }
        this.setState({ 
            player: 1,
            finished: false 
        });
    }

    render() {
        const tokens = [];
        const overlay = null;
        for(let i = 1; i < 10; i++) {
            tokens.push(<button className="token" data-player="0" key={i} data-token={i} onClick={(event) => {this.jugarToken(event)}}></button>);
        }
        return(
            <React.Fragment>
                <div className="Info">
                    <h2>Es el turno del jugador: {this.state.player}</h2>
                </div>
                <div className="Game">
                    <div className="board">
                        {tokens}
                    </div>
                </div>
                {this.state.finished &&
                   <div className="Overlay">
                    <p>Felicidades player {this.state.player}, has ganado la partida</p>
                    <button onClick={() => { this.restartGame() }}>Reiniciar juego</button>
                    </div>
                }
            </React.Fragment>
        );
    } 
}
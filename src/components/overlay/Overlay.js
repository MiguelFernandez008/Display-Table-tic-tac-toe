import React, { Component } from 'react';
import './Overlay.scss';

export default class Overlay extends Component {
    render() {
        return(
            <div className="Overlay">
                <p>Felicidades player {this.props.player}, has ganado la partida</p>
            </div>
        );
    }
}
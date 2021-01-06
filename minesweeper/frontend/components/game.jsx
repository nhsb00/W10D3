import React from 'react';
import * as Minesweeper from '../minesweeper.js';
import Board from "./board";

class Game extends React.Component {
    constructor(props) {
        super(props);
        const board = new Minesweeper.Board(10, 10);
        this.state = { board: board };

        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(tile, altkey) {
        // debugger
        if(altkey) {
            // debugger
            tile.toggleFlag();
            // debugger
        } else {
            tile.explore();
            // debugger
        }
        
        this.setState({board: this.state.board})
        // debugger
    }

    render () {
        return (
            <div>
                <Board board={this.state.board} update={this.updateGame}  />
            </div>
        )
    }
}

export default Game;


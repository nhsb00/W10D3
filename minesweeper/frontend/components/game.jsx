import React from 'react';
import * as Minesweeper from '../minesweeper.js';
import Board from "./board";

class Game extends React.Component {
    constructor(props) {
        super(props);
        const board = new Minesweeper.Board(4, 0);
        this.state = { board: board };

        this.updateGame = this.updateGame.bind(this);
    }

    updateGame() {

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


import React from 'react';
import * as Minesweeper from '../minesweeper.js';
import Board from "./board";

class Game extends React.Component {
    constructor(props) {
        super(props);
        const board = new Minesweeper.Board(10, 10);
        this.state = { board: board };

        this.updateGame = this.updateGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
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

    restartGame() {
        if(this.state.board.won() || this.state.board.lost()) {
            this.setState({board: new Minesweeper.Board(10, 10)})
        }
        // const board = new Minesweeper.Board(10, 10);
        // this.setState({ board: board });
    }

    render () {
        if(this.state.board.won()) {
            return (<h1>You won!</h1>)
        } else if (this.state.board.lost()) {
            return (<h1>You lost!</h1>
                <button onClick={this.restartGame}>Restart Game</button>)
        }


        return (
            <div>
                {gameOver.bind(this)}
                <Board board={this.state.board} update={this.updateGame} />
                <button onClick={this.restartGame}>Restart Game</button>
            </div>
        )
    }
}

export default Game;


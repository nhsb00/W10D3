import React from 'react';
import * as Minesweeper from '../minesweeper';
import Tile from './tile';

class Board extends React.Component{
 constructor(props) {
    super(props);
  
 }


 render () {
     let tiles = this.props.board;
     let tilesgrid = tiles.grid.map( (tilerow, row) => {
        let tilerowmapped = tilerow.map( (tile, col) => {
            return( 
                <div key={col}>
                    <Tile 
                    tile={tile}
                    updateGame={this.props.updateGame}
                    />
                </div>
            )
        });
        return (
            <div className="tilerow" key={row}>
                { tilerowmapped  }
            </div>
        )
     });
    return (
        <div>
            { tilesgrid }
        </div>
    );
 };
};

export default Board;
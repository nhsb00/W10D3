import React from 'react';
import * as Minesweeper from '../minesweeper';

class Tile extends React.Component{
    constructor(props) { 
        super(props);
        this.state = {
            revealed: this.props.explored,
            bombed: this.props.bombed,
            flagged: this.props.flagged
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        const altkey = event.altKey ? true : false;
        this.props.updateGame(this.props.tile, altkey);
    }

    render () {

        const bombcount = this.props.tile.adjacentBombCount();
        const explored = bombcount > 0 ? bombcount : ""
        const bomb = this.state.bombed ? <span>&#x1F4A3;</span> : explored
        const flag = this.state.flagged ? <span>&#x2690;</span> : bomb
        const reveal = this.state.revealed ? flag : ""


        return (
            <div className={"tile-" + (this.state.revealed ? "explored" : "unexplored")} onClick={this.handleClick}>
                    {reveal}
            </div>
        )
    }

}

export default Tile;
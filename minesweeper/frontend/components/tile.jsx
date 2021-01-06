import React from 'react';

class Tile extends React.Component{
    constructor(props) { 
        super(props);
        // this.state = {
        //     revealed: this.explored,
        //     bombed: this.bombed,
        //     flagged: this.flagged
        // };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        // debugger
        const altkey = event.altKey ? true : false;
        // debugger
        // this.setState({revealed: true})
        this.props.updateGame(this.props.tile, altkey);
    }

    render () {
        // const tile = this.state;    
        // if (tile.explored){
        //     if (tile.bombed) {
        //         return <span>&#x1F4A3;</span>;
        //     } else {
        //         return bombcount;
        //     }
        // } else if (tile.flagged) {
        //     return <span>&#x2690;</span>;
        // } else {
        //     return "";
        // }
        const {bombed, explored, flagged } = this.props.tile
        const bombcount = this.props.tile.adjacentBombCount();
        const explore = bombcount > 0 ? bombcount : ""
        const bomb = bombed ? <span>&#x1F4A3;</span> : explore
        const flag = flagged ? <span>&#x2690;</span> : ""
        const reveal = explored ? bomb : flag

        return (
            <div className={"tile-" + (explored ? "explored" : "unexplored")} onClick={this.handleClick}>
                    {reveal}
            </div>
        )
        // debugger
    }

}

export default Tile;
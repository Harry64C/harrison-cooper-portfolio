// all chess images from https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces


const Tile = (props) => {
  const tile = props.tile;
  const piece = props.piece;

  const handleClick = () => { 
    props.clickFunction(tile);
  }; 

  if ((tile[0] + tile[1]) % 2 === 1) {
    return <div className = "tile black-tile" onClick = {handleClick}>{tile}
      <img src = {piece} className = "piece" alt = ""></img>
    </div>
  }

  else {
    return <div className = "tile white-tile" onClick = {handleClick}>{tile}
      <img src = {piece} className = "piece" alt = ""></img>
    </div>
  }

}



export default Tile;
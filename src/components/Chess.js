// all chess images from https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces
import l_king from '../images/chess/klt45.svg.png';
import d_king from '../images/chess/kdt45.svg.png';
import d_pawn from '../images/chess/pdt45.svg.png';
import l_pawn from '../images/chess/plt45.svg.png';
import l_knight from '../images/chess/nlt45.svg.png';
import d_knight from '../images/chess/ndt45.svg.png';
import l_bishop from '../images/chess/blt45.svg.png';
import d_bishop from '../images/chess/bdt45.svg.png';
import l_rook from '../images/chess/rlt45.svg.png';
import d_rook from '../images/chess/rdt45.svg.png';
import l_queen from '../images/chess/qlt45.svg.png';
import d_queen from '../images/chess/qdt45.svg.png';


function Chess() {
  return (
    <div className = "project" id = "chess">
      <h2>Chess</h2>

      <p>chess</p> 
      <p>chess</p>
      <p>chess</p>

      <img src = {d_queen}></img>
      <img src = {l_queen}></img>

      <p>chess</p>
      <p>chess</p>
      <p>chess</p>

    </div>

  );
}

export default Chess;
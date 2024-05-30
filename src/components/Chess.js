// chessboard code inspired from https://youtu.be/Iri__zwxwHg?si=0Xg832DMqEHqAAZg

// all chess images from https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces
import Wking from '../images/chess/Wking.png';
import Bking from '../images/chess/Bking.png';
import Bpawn from '../images/chess/Bpawn.png';
import Wpawn from '../images/chess/Wpawn.png';
import Wknight from '../images/chess/Wknight.png';
import Bknight from '../images/chess/Bknight.png';
import Wbishop from '../images/chess/Wbishop.png';
import Bbishop from '../images/chess/Bbishop.png';
import Wrook from '../images/chess/Wrook.png';
import Brook from '../images/chess/Brook.png';
import Wqueen from '../images/chess/Wqueen.png';
import Bqueen from '../images/chess/Bqueen.png';

// import filler from '../images/chess/filler.png';
import {useState, useEffect} from 'react'


import Tile from './Tile.js'


function setupBoard(row, col, boardArr) {
  if (row === 6) {
    boardArr[row][col] = 'wpawn'; // 2d array colors are reversed 
    return Wpawn;
  }
  else if (row === 1) {    
    boardArr[row][col] = 'bpawn';
    return Bpawn;
  }

  else if (row === 0) { 
    if (col === 0 || col === 7) {
      boardArr[row][col] = 'brook';
      return Brook;
    }
    else if (col === 1 || col === 6) {
      boardArr[row][col] = 'bknight';
      return Bknight;
    }
    else if (col === 2 || col === 5) {
      boardArr[row][col] = 'bbishop';
      return Bbishop;
    }
    else if (col === 3) {
      boardArr[row][col] = 'bqueen';
      return Bqueen;
    }
    else {
      boardArr[row][col] = 'bking';
      return Bking;
    }
  }

  else if (row === 7) { 
    if (col === 0 || col === 7) {
      boardArr[row][col] = 'wrook';
      return Wrook;
    }
    else if (col === 1 || col === 6) {
      boardArr[row][col] = 'wknight';
      return Wknight;
    }
    else if (col === 2 || col === 5) {
      boardArr[row][col] = 'wbishop';
      return Wbishop;
    }
    else if (col === 3) {
      boardArr[row][col] = 'wqueen';
      return Wqueen;
    }
    else {
      boardArr[row][col] = 'wking';
      return Wking;
    }
  }

  else return undefined;
}

var firstClick = [];



function Chess() {
  let board = [];
  let boardArr = []; // 2d array used for calculations
  for (let i = 0; i < 8; i++) {
    let row = [];
    for (let j = 0; j < 8; j++) {
      row.push('');
    }
    boardArr.push(row);
  }

  const [clickedTile, SetClickedTile] = useState([0,0]);
  const [oldTile, SetOldTile] = useState(null);
  //const [turn, SetTurn] = useState('w');

  // useEffect(() => { // triggers on change to the clickedTile
  //   let piece = boardArr[clickedTile[0]][clickedTile[1]]
  //   if (!piece) return;

  //   if (firstClick.length !== 0 && turn !== piece[0]) {
  //     piece = firstClick;
  //     firstClick = '';

  //     SetTurn((turn === 'w') ? 'b' : 'w');
  //   }

  //   else if (turn === piece[0]) {
  //     firstClick = clickedTile;
  //     console.log("first click is " + firstClick)
  //   }
  //   else {
  //     firstClick = [];
  //   }
  // }, [clickedTile, SetClickedTile]);


    function clickTile(e) {
      const element = e.target;

      if (oldTile !== null) {
        element.src = oldTile;
        SetOldTile(null)
      }
      else if (element.classList.contains("piece")) {
        SetOldTile(element.src);
      }
    }

    


  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {

      const tile = [row, col];
      const piece = setupBoard(row, col, boardArr);

      const key = "" + row + col;
      board.push(<Tile key = {key} tile = {tile} piece = {piece} clickFunction = {SetClickedTile}></Tile>)
    } 
  }



  return (
    <div className = "project" id = "chess">
      <h2>Chess</h2>

      <div onMouseDown = {e => clickTile(e)} className = "chessboard">{board}</div>
    </div>
  );
}




export default Chess;
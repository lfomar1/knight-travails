import Board from "./modules/board";
const board = document.querySelector(".board");
const chessBoard = new Board();

board.appendChild(chessBoard.newBoard());

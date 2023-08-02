import Board from "./modules/board";
import Moves from "./modules/moves";

const board = document.querySelector(".board");
const chessBoard = new Board();
const moves = Moves();
board.appendChild(chessBoard.newBoard());
moves.getKnight();
chessBoard.getEmptyCells();

class Board {
  constructor() {
    this.alphas = "abcdefgh".split("");
    this.nums = "12345678".split("");
  }

  newBoard() {
    const chessBoard = document.createElement("div");

    for (let i = 0; i < 8; i++) {
      //Create a new row
      let divRow = document.createElement("div");
      divRow.setAttribute("class", "div-row");
      for (let j = 0; j < 8; j++) {
        //Create a new cell
        let divData = document.createElement("div");
        let boxId = this.alphas[j] + this.nums[j];

        //If the num of cell coordinates is even
        //Then color of cell is white
        if ((i + j) % 2 == 0) {
          divData.setAttribute("class", "piece-box white-box");
          divData.setAttribute("id", boxId);
          divRow.appendChild(divData);
        } else {
          // If the sum of cell coordinates is odd, then color the cell black
          // Create a class attribute for all black cells
          divData.setAttribute("class", "piece-box black-box");
          divData.setAttribute("id", boxId);
          // Append the cell to its row
          divRow.appendChild(divData);
        }
      }
      chessBoard.appendChild(divRow);
    }
    chessBoard.setAttribute("cellspacing", "0");
    chessBoard.setAttribute("id", "board");
    return chessBoard;
  }
}

export default Board;

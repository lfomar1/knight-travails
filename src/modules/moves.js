import Board from "./board";
function moves() {
  let board; //=> get the empty board
  let getKnight; // => When click the button get knight should select the knight svg without using in any cell
  let startingPoint; // => starting point will be the cell where i click
  let posibleMoves; //=> All posible knight moves from there
  let validateMoves; //=> See if it is posible to move there
  let move; // => move the knight there
}

const Moves = () => {
  function getKnight() {
    //Get the button class first
    const placeKnightButton = document.querySelector(".place-normal");

    placeKnightButton.addEventListener("click", function () {
      //Select knight img;
      const knightImg = document.createElement("img");
      knightImg.classList.add("knight-png");
      knightImg.src = "../src/imgs/knight-img.png";
      console.log(knightImg.src);
    });
  }
  function getBoard() {}
  return {
    getKnight,
    getBoard,
  };
};
export default Moves;

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/board.js":
/*!******************************!*\
  !*** ./src/modules/board.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Board {
  constructor() {
    this.alphas = "abcdefgh".split("");
    this.nums = "12345678".split("");
    this.emptyCells = [];
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
          this.emptyCells.push(boxId);
        } else {
          // If the sum of cell coordinates is odd, then color the cell black
          // Create a class attribute for all black cells
          divData.setAttribute("class", "piece-box black-box");
          divData.setAttribute("id", boxId);
          // Append the cell to its row
          divRow.appendChild(divData);
          this.emptyCells.push(boxId);
        }
      }
      chessBoard.appendChild(divRow);
    }
    chessBoard.setAttribute("cellspacing", "0");
    chessBoard.setAttribute("id", "board");
    return chessBoard;
  }

  getEmptyCells() {
    console.log(this.emptyCells);
    return this.emptyCells;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);


/***/ }),

/***/ "./src/modules/moves.js":
/*!******************************!*\
  !*** ./src/modules/moves.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/modules/board.js");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Moves);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/board */ "./src/modules/board.js");
/* harmony import */ var _modules_moves__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/moves */ "./src/modules/moves.js");



const board = document.querySelector(".board");
const chessBoard = new _modules_board__WEBPACK_IMPORTED_MODULE_0__["default"]();
const moves = (0,_modules_moves__WEBPACK_IMPORTED_MODULE_1__["default"])();
board.appendChild(chessBoard.newBoard());
moves.getKnight();
chessBoard.getEmptyCells();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hETztBQUM1QjtBQUNBLGFBQWE7QUFDYixpQkFBaUI7QUFDakIscUJBQXFCO0FBQ3JCLG9CQUFvQjtBQUNwQixxQkFBcUI7QUFDckIsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEtBQUssRUFBQzs7Ozs7OztVQzdCckI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOb0M7QUFDQTs7QUFFcEM7QUFDQSx1QkFBdUIsc0RBQUs7QUFDNUIsY0FBYywwREFBSztBQUNuQjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvLi9zcmMvbW9kdWxlcy9ib2FyZC5qcyIsIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvLi9zcmMvbW9kdWxlcy9tb3Zlcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFscGhhcyA9IFwiYWJjZGVmZ2hcIi5zcGxpdChcIlwiKTtcbiAgICB0aGlzLm51bXMgPSBcIjEyMzQ1Njc4XCIuc3BsaXQoXCJcIik7XG4gICAgdGhpcy5lbXB0eUNlbGxzID0gW107XG4gIH1cblxuICBuZXdCb2FyZCgpIHtcbiAgICBjb25zdCBjaGVzc0JvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAvL0NyZWF0ZSBhIG5ldyByb3dcbiAgICAgIGxldCBkaXZSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGl2Um93LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGl2LXJvd1wiKTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgODsgaisrKSB7XG4gICAgICAgIC8vQ3JlYXRlIGEgbmV3IGNlbGxcbiAgICAgICAgbGV0IGRpdkRhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsZXQgYm94SWQgPSB0aGlzLmFscGhhc1tqXSArIHRoaXMubnVtc1tqXTtcbiAgICAgICAgLy9JZiB0aGUgbnVtIG9mIGNlbGwgY29vcmRpbmF0ZXMgaXMgZXZlblxuICAgICAgICAvL1RoZW4gY29sb3Igb2YgY2VsbCBpcyB3aGl0ZVxuICAgICAgICBpZiAoKGkgKyBqKSAlIDIgPT0gMCkge1xuICAgICAgICAgIGRpdkRhdGEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwaWVjZS1ib3ggd2hpdGUtYm94XCIpO1xuICAgICAgICAgIGRpdkRhdGEuc2V0QXR0cmlidXRlKFwiaWRcIiwgYm94SWQpO1xuICAgICAgICAgIGRpdlJvdy5hcHBlbmRDaGlsZChkaXZEYXRhKTtcbiAgICAgICAgICB0aGlzLmVtcHR5Q2VsbHMucHVzaChib3hJZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gSWYgdGhlIHN1bSBvZiBjZWxsIGNvb3JkaW5hdGVzIGlzIG9kZCwgdGhlbiBjb2xvciB0aGUgY2VsbCBibGFja1xuICAgICAgICAgIC8vIENyZWF0ZSBhIGNsYXNzIGF0dHJpYnV0ZSBmb3IgYWxsIGJsYWNrIGNlbGxzXG4gICAgICAgICAgZGl2RGF0YS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBpZWNlLWJveCBibGFjay1ib3hcIik7XG4gICAgICAgICAgZGl2RGF0YS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBib3hJZCk7XG4gICAgICAgICAgLy8gQXBwZW5kIHRoZSBjZWxsIHRvIGl0cyByb3dcbiAgICAgICAgICBkaXZSb3cuYXBwZW5kQ2hpbGQoZGl2RGF0YSk7XG4gICAgICAgICAgdGhpcy5lbXB0eUNlbGxzLnB1c2goYm94SWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjaGVzc0JvYXJkLmFwcGVuZENoaWxkKGRpdlJvdyk7XG4gICAgfVxuICAgIGNoZXNzQm9hcmQuc2V0QXR0cmlidXRlKFwiY2VsbHNwYWNpbmdcIiwgXCIwXCIpO1xuICAgIGNoZXNzQm9hcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJib2FyZFwiKTtcbiAgICByZXR1cm4gY2hlc3NCb2FyZDtcbiAgfVxuXG4gIGdldEVtcHR5Q2VsbHMoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5lbXB0eUNlbGxzKTtcbiAgICByZXR1cm4gdGhpcy5lbXB0eUNlbGxzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkO1xuIiwiaW1wb3J0IEJvYXJkIGZyb20gXCIuL2JvYXJkXCI7XG5mdW5jdGlvbiBtb3ZlcygpIHtcbiAgbGV0IGJvYXJkOyAvLz0+IGdldCB0aGUgZW1wdHkgYm9hcmRcbiAgbGV0IGdldEtuaWdodDsgLy8gPT4gV2hlbiBjbGljayB0aGUgYnV0dG9uIGdldCBrbmlnaHQgc2hvdWxkIHNlbGVjdCB0aGUga25pZ2h0IHN2ZyB3aXRob3V0IHVzaW5nIGluIGFueSBjZWxsXG4gIGxldCBzdGFydGluZ1BvaW50OyAvLyA9PiBzdGFydGluZyBwb2ludCB3aWxsIGJlIHRoZSBjZWxsIHdoZXJlIGkgY2xpY2tcbiAgbGV0IHBvc2libGVNb3ZlczsgLy89PiBBbGwgcG9zaWJsZSBrbmlnaHQgbW92ZXMgZnJvbSB0aGVyZVxuICBsZXQgdmFsaWRhdGVNb3ZlczsgLy89PiBTZWUgaWYgaXQgaXMgcG9zaWJsZSB0byBtb3ZlIHRoZXJlXG4gIGxldCBtb3ZlOyAvLyA9PiBtb3ZlIHRoZSBrbmlnaHQgdGhlcmVcbn1cblxuY29uc3QgTW92ZXMgPSAoKSA9PiB7XG4gIGZ1bmN0aW9uIGdldEtuaWdodCgpIHtcbiAgICAvL0dldCB0aGUgYnV0dG9uIGNsYXNzIGZpcnN0XG4gICAgY29uc3QgcGxhY2VLbmlnaHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYWNlLW5vcm1hbFwiKTtcblxuICAgIHBsYWNlS25pZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvL1NlbGVjdCBrbmlnaHQgaW1nO1xuICAgICAgY29uc3Qga25pZ2h0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGtuaWdodEltZy5jbGFzc0xpc3QuYWRkKFwia25pZ2h0LXBuZ1wiKTtcbiAgICAgIGtuaWdodEltZy5zcmMgPSBcIi4uL3NyYy9pbWdzL2tuaWdodC1pbWcucG5nXCI7XG4gICAgICBjb25zb2xlLmxvZyhrbmlnaHRJbWcuc3JjKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBnZXRCb2FyZCgpIHt9XG4gIHJldHVybiB7XG4gICAgZ2V0S25pZ2h0LFxuICAgIGdldEJvYXJkLFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IE1vdmVzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQm9hcmQgZnJvbSBcIi4vbW9kdWxlcy9ib2FyZFwiO1xuaW1wb3J0IE1vdmVzIGZyb20gXCIuL21vZHVsZXMvbW92ZXNcIjtcblxuY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkXCIpO1xuY29uc3QgY2hlc3NCb2FyZCA9IG5ldyBCb2FyZCgpO1xuY29uc3QgbW92ZXMgPSBNb3ZlcygpO1xuYm9hcmQuYXBwZW5kQ2hpbGQoY2hlc3NCb2FyZC5uZXdCb2FyZCgpKTtcbm1vdmVzLmdldEtuaWdodCgpO1xuY2hlc3NCb2FyZC5nZXRFbXB0eUNlbGxzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
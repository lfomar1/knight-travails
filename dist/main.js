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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);


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

const board = document.querySelector(".board");
const chessBoard = new _modules_board__WEBPACK_IMPORTED_MODULE_0__["default"]();

board.appendChild(chessBoard.newBoard());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7VUN6Q3JCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOb0M7QUFDcEM7QUFDQSx1QkFBdUIsc0RBQUs7O0FBRTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzLy4vc3JjL21vZHVsZXMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tuaWdodC10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hbHBoYXMgPSBcImFiY2RlZmdoXCIuc3BsaXQoXCJcIik7XG4gICAgdGhpcy5udW1zID0gXCIxMjM0NTY3OFwiLnNwbGl0KFwiXCIpO1xuICB9XG5cbiAgbmV3Qm9hcmQoKSB7XG4gICAgY29uc3QgY2hlc3NCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgLy9DcmVhdGUgYSBuZXcgcm93XG4gICAgICBsZXQgZGl2Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdlJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpdi1yb3dcIik7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7IGorKykge1xuICAgICAgICAvL0NyZWF0ZSBhIG5ldyBjZWxsXG4gICAgICAgIGxldCBkaXZEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGV0IGJveElkID0gdGhpcy5hbHBoYXNbal0gKyB0aGlzLm51bXNbal07XG5cbiAgICAgICAgLy9JZiB0aGUgbnVtIG9mIGNlbGwgY29vcmRpbmF0ZXMgaXMgZXZlblxuICAgICAgICAvL1RoZW4gY29sb3Igb2YgY2VsbCBpcyB3aGl0ZVxuICAgICAgICBpZiAoKGkgKyBqKSAlIDIgPT0gMCkge1xuICAgICAgICAgIGRpdkRhdGEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwaWVjZS1ib3ggd2hpdGUtYm94XCIpO1xuICAgICAgICAgIGRpdkRhdGEuc2V0QXR0cmlidXRlKFwiaWRcIiwgYm94SWQpO1xuICAgICAgICAgIGRpdlJvdy5hcHBlbmRDaGlsZChkaXZEYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBJZiB0aGUgc3VtIG9mIGNlbGwgY29vcmRpbmF0ZXMgaXMgb2RkLCB0aGVuIGNvbG9yIHRoZSBjZWxsIGJsYWNrXG4gICAgICAgICAgLy8gQ3JlYXRlIGEgY2xhc3MgYXR0cmlidXRlIGZvciBhbGwgYmxhY2sgY2VsbHNcbiAgICAgICAgICBkaXZEYXRhLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGllY2UtYm94IGJsYWNrLWJveFwiKTtcbiAgICAgICAgICBkaXZEYXRhLnNldEF0dHJpYnV0ZShcImlkXCIsIGJveElkKTtcbiAgICAgICAgICAvLyBBcHBlbmQgdGhlIGNlbGwgdG8gaXRzIHJvd1xuICAgICAgICAgIGRpdlJvdy5hcHBlbmRDaGlsZChkaXZEYXRhKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2hlc3NCb2FyZC5hcHBlbmRDaGlsZChkaXZSb3cpO1xuICAgIH1cbiAgICBjaGVzc0JvYXJkLnNldEF0dHJpYnV0ZShcImNlbGxzcGFjaW5nXCIsIFwiMFwiKTtcbiAgICBjaGVzc0JvYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYm9hcmRcIik7XG4gICAgcmV0dXJuIGNoZXNzQm9hcmQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBCb2FyZCBmcm9tIFwiLi9tb2R1bGVzL2JvYXJkXCI7XG5jb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmRcIik7XG5jb25zdCBjaGVzc0JvYXJkID0gbmV3IEJvYXJkKCk7XG5cbmJvYXJkLmFwcGVuZENoaWxkKGNoZXNzQm9hcmQubmV3Qm9hcmQoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
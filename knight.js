import Queue from "./queue.js";

function knightMoves(src, dest) {
  console.log("This is the knightMoves function");
  let path = [src];
  let visited = new Set();
  let queue = new Queue();
  // TODO: implement
  return path;
}

function _forEachNextStep([xStart, yStart], callback) {
  // TODO
  // Perform the callback on each x,y coordinate pair
  // that represents a direct step from srcCoords.
}

function _areCoordsEqual([xa, ya], [xb, yb]) {
  return xa == xb && ya == yb;
}

// All board indices have exactly one digit,
// so a coordinate pair can be converted to a two-char string unambiguously.
function _coordsToKey([x, y]) {
  return `${x}${y}`;
}

export default knightMoves;
import Queue from "./queue.js";
import test from "./test.js";

export default (function() {
  function knightMoves(src, dest) {
    let pathQueue = new Queue();
    pathQueue.enqueue([src]);
    let visitedCoords = new KeySet(_coordsToKey);
    visitedCoords.add(src);
    while (!pathQueue.isEmpty()) {
      let currentPath = pathQueue.dequeue();
      let latestCoords = currentPath[currentPath.length - 1];
      for (const nextCoords of _makeNextSteps(latestCoords)) {
        if (visitedCoords.has(nextCoords)) {
          continue; // Skip these coords; they're already visited.
        }
        let nextPath = [...currentPath, nextCoords];
        if (_areCoordsEqual(nextCoords, dest)) {
          return nextPath;
        } else {
          pathQueue.enqueue(nextPath);
        }
      }
    }
    return null;
  }

  function _coordsToKey(px, py) {
    let x, y;
    if (!y && Array.isArray(px)) {
      [x, y] = px;
    } else {
      x = px;
      y = py;
    }
    return `${x}${y}`;
  }

  function _areCoordsEqual([xa, ya], [xb, yb]) {
    return xa == xb && ya == yb;
  }

  function _makeNextSteps([x, y]) {
    return [
      [x - 2, y - 1],
      [x - 2, y + 1],
      [x - 1, y - 2],
      [x - 1, y + 2],
      [x + 1, y - 2],
      [x + 1, y + 2],
      [x + 2, y - 1],
      [x + 2, y + 1],
    ];
  }

  class KeySet {
    constructor(funcMakeKey) {
      this.makeKey = funcMakeKey;
      this._keySet = new Set();
    }

    add(value) {
      return this._keySet.add(this.makeKey(value));
    }

    delete(value) {
      return this._keySet.delete(this.makeKey(value));
    }

    has(value) {
      return this._keySet.has(this.makeKey(value));
    }
  }

  return knightMoves;
}());








// All board indices have exactly one digit,
// so a coordinate pair can be converted to a two-char string unambiguously.

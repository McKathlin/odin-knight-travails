import Queue from "./queue.js";

export default (function() {
  const BOARD_WIDTH = 8;
  const BOARD_HEIGHT = 8;

  function knightMoves(src, dest) {
    if (_areCoordsEqual(src, dest)) {
      return [src]; // No need to move at all!
    }

    // The queue helps us search breadth first.
    let pathQueue = new Queue();
    pathQueue.enqueue([src]);
    let visitedCoords = new KeySet(_coordsToKey);
    visitedCoords.add(src);
    while (!pathQueue.isEmpty()) {
      let currentPath = pathQueue.dequeue();
      let latestCoords = currentPath[currentPath.length - 1];
      for (const nextCoords of _makeNextValidSteps(latestCoords)) {
        if (visitedCoords.has(nextCoords)) {
          continue; // Skip these coords; they're already added.
        }
        const nextPath = [...currentPath, nextCoords];
        if (_areCoordsEqual(nextCoords, dest)) {
          return nextPath;
        } else {
          pathQueue.enqueue(nextPath);
          visitedCoords.add(nextCoords);
        }
      }
    }
    return null;
  }

  function _coordsToKey(px, py) {
    let x, y;
    if (!py && Array.isArray(px)) {
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

  function _makeNextValidSteps(currentCoords) {
    let validSteps = [];
    _forPossibleStepsFrom(currentCoords, (x, y) => {
      // Validate bounds
      if (x >= 0 && x < BOARD_WIDTH && y >= 0 && y < BOARD_HEIGHT) {
        validSteps.push([x, y]);
      }
    });
    return validSteps;
  }

  function _forPossibleStepsFrom([x, y], callback) {
    callback(x - 2, y - 1);
    callback(x - 2, y + 1);
    callback(x - 1, y - 2);
    callback(x - 1, y + 2);
    callback(x + 1, y - 2);
    callback(x + 1, y + 2);
    callback(x + 2, y - 1);
    callback(x + 2, y + 1);
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

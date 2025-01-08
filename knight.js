import Queue from "./queue.js";

export default (function() {
  function knightMoves(src, dest) {
    console.log("This is the knightMoves function");
    let pathQueue = new Queue();
    pathQueue.enqueue([src]);
    let visitedCoords = new KeySet(_coordsToKey);
    visitedCoords.add(src);
    while (!pathQueue.isEmpty()) {
      let currentPath = pathQueue.dequeue();
      let latestCoords = currentPath[currentPath.length - 1];
      _forEachNextStep(latestCoords, (x, y) => {
        let nextPath = [...latestCoords, [x, y]];
        // TODO: finish implementing
      })
    }
    // TODO: Replace with actual path
    return [src, dest];
  }

  function _forEachNextStep([x, y], callback) {
    callback(x - 2, y - 1);
    callback(x - 2, y + 1);
    callback(x - 1, y - 2);
    callback(x - 1, y + 2);
    callback(x + 1, y - 2);
    callback(x + 1, y + 2);
    callback(x + 2, y - 1);
    callback(x + 2, y + 1);
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

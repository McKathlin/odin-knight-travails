import knightMoves from './knight.js';
import Queue from './queue.js';
import oldTest from './oldTest.js';

// Queue tests
let q = new Queue([9, 18, 27, 36]);
q.enqueue(10);
oldTest.areEqual(q.dequeue(), 9);
q.enqueue(20);
oldTest.areEqual(q.dequeue(), 18);
oldTest.areEqual(q.dequeue(), 27);
q.enqueue(30);
oldTest.areEqual(q.dequeue(), 36);
oldTest.areEqual(q.dequeue(), 10);
oldTest.areEqual(q.dequeue(), 20);
oldTest.areEqual(q.dequeue(), 30);
oldTest.areEqual(q.dequeue(), null);

// knightMoves edge tests
auditPath(knightMoves([3,3], [4,5])); // Single step
auditPath(knightMoves([0,0], [0,1])); // Tricky one square over
auditPath(knightMoves([7,0], [7,7])); // Along an edge
auditPath(knightMoves([7,7], [0,0])); // Across the board

// knightMoves out-of-bounds tests
oldTest.areEqual(knightMoves([0,0], [-1,-2]), null);
oldTest.areEqual(knightMoves([0,0], [8,8]), null);

// knightMoves random tests
for (let i = 0; i < 100; i++) {
  let pointA = randomBoardCoords();
  let pointB = randomBoardCoords();
  let forward = knightMoves(pointA, pointB);
  let backward = knightMoves(pointB, pointA);
  oldTest.isTrue(forward !== null);
  oldTest.isTrue(backward !== null);
  oldTest.areEqual(forward.length, backward.length);
  auditPath(forward, i < 10);
  auditPath(backward, false);
}

// Testing helper functions

function randomBoardCoords() {
  const BOARD_SIZE = 8;
  return [
    Math.floor(Math.random() * BOARD_SIZE),
    Math.floor(Math.random() * BOARD_SIZE)
  ];
}

function auditPath(path, doLog = true) {
  // Ensure all coords are in bounds
  const BOARD_SIZE = 8;
  for (const [x, y] of path) {
    oldTest.isTrue(x >= 0 && x < BOARD_SIZE);
    oldTest.isTrue(y >= 0 && y < BOARD_SIZE);
  }

  // Ensure all steps are valid knight steps
  for (let i = 1; i < path.length; i++) {
    let [x, y] = path[i];
    let [prevX, prevY] = path[i - 1];
    let xDiff = Math.abs(x - prevX);
    let yDiff = Math.abs(y - prevY);
    if (xDiff == 1) {
      oldTest.areEqual(yDiff, 2);
    } else if (xDiff == 2) {
      oldTest.areEqual(yDiff, 1);
    } else {
      oldTest.fail();
    }
  }

  // Log
  if (doLog) {
    console.log(path);
  }
}
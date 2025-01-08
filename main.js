import knightMoves from './knight.js';
import Queue from './queue.js';
import test from './test.js';

// Queue tests
let q = new Queue([9, 18, 27, 36]);
q.enqueue(10);
test.areEqual(q.dequeue(), 9);
q.enqueue(20);
test.areEqual(q.dequeue(), 18);
test.areEqual(q.dequeue(), 27);
q.enqueue(30);
test.areEqual(q.dequeue(), 36);
test.areEqual(q.dequeue(), 10);
test.areEqual(q.dequeue(), 20);
test.areEqual(q.dequeue(), 30);
test.areEqual(q.dequeue(), null);

// knightMoves tests
console.log(knightMoves([0,0], [1,2])); // Single step
console.log(knightMoves([0,0], [0,1])); // Tricky one square over
console.log(knightMoves([0,0], [8,8])); // Across the board

// TODO: test the knightMoves function
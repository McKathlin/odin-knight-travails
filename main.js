import knightMoves from './knight.js';
import Queue from './queue.js';
import test from './test.js';

// Queue test
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

console.log(knightMoves([0,0], [1,2]));

// TODO: test the knightMoves function
import queue from "./queue";
import Queue from "./queue";

test('populates up front', () => {
  let q = new Queue([9, 18, 27, 36]);
  expect(q.dequeue()).toBe(9);
  expect(q.dequeue()).toBe(18);
});

test('populates with enqueue', () => {
  let q = new Queue();
  q.enqueue('foo');
  q.enqueue('bar');
  expect(q.dequeue()).toBe('foo');
  expect(q.dequeue()).toBe('bar');
});

test('dequeues null when empty', () => {
  expect(new Queue().dequeue()).toBe(null);
});

test('enqueues correctly after dequeue', () => {
  let q = new Queue(['Alice', 'Bob']);
  q.dequeue();
  q.enqueue('Charlie');
  expect(q.dequeue()).toBe('Bob');
});
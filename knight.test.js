import knightMoves from "./knight";

test('typical two-move case', () => {
  expect(knightMoves([4,5], [7, 2]).length).toBe(3);
});

test('matches start and end inputs', () => {
  const result = knightMoves([4,5], [7, 2]);
  expect(result[0]).toStrictEqual([4, 5]);
  expect(result[result.length - 1]).toStrictEqual([7, 2]);
});

test('makes size 1 route to itself', () => {
  expect(knightMoves([5,2], [5,2]).length).toBe(1);
});

test('makes size 2 route 1 move away', () => {
  expect(knightMoves([3,3], [4,5]).length).toBe(2);
});

test('cannot move to negative indices', () => {
  expect(knightMoves([0,0], [-1,-2])).toBe(null);
});

test('cannot move beyond board size', () => {
  expect(knightMoves([0,0], [8,8])).toBe(null);
});

test('moves along edge', () => {
  expect(!!knightMoves([7,0], [7,7])).toBe(true);
});

test('moves across board', () => {
  expect(!!knightMoves([7,7], [0,0])).toBe(true);
});

test('moves one square over', () => {
  expect(!!knightMoves([0,0], [0,1])).toBe(true);
});
/*
test('moves between any pair of random positions', () => {
  expect(true).toBe(false); // TODO: write test
});
*/


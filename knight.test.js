import knightMoves from "./knight";

test('typical two-move case', () => {
  expect(knightMoves([4,5], [7, 2]).length).toBe(3);
});

test('matches start and end inputs', () => {
  const result = knightMoves([4,5], [7, 2]);
  expect(result[0]).toEqual([4, 5]);
  expect(result[result.length - 1]).toEqual([7, 2]);
});

test('makes size 1 route to itself', () => {
  expect(knightMoves([5,2], [5,2]).length).toBe(1);
});

test('makes size 2 route 1 move away', () => {
  expect(knightMoves([3,3], [4,5]).length).toBe(2);
});

test('cannot move to negative indices', () => {
  expect(knightMoves([0,0], [-1,-2])).toBeNull();
});

test('cannot move beyond board size', () => {
  expect(knightMoves([0,0], [8,8])).toBeNull();
});

test('moves along edge', () => {
  expect(knightMoves([7,0], [7,7])).toBeTruthy();
});

test('moves across board', () => {
  expect(knightMoves([7,7], [0,0])).toBeTruthy();
});

test('moves one square over', () => {
  expect(knightMoves([0,0], [0,1])).toBeTruthy();
});

test('moves between any pair of random positions', () => {
  function randomBoardCoords() {
    const BOARD_SIZE = 8;
    return [
      Math.floor(Math.random() * BOARD_SIZE),
      Math.floor(Math.random() * BOARD_SIZE)
    ];
  }

  function auditPath(path) {
    // Ensure all coords are in bounds
    const BOARD_SIZE = 8;
    for (const [x, y] of path) {
      expect(x).toBeGreaterThanOrEqual(0);
      expect(x).toBeLessThan(BOARD_SIZE);
      expect(y).toBeGreaterThanOrEqual(0);
      expect(y).toBeLessThan(BOARD_SIZE);
    }

    // Ensure all steps are valid knight steps
    for (let i = 1; i < path.length; i++) {
      let [x, y] = path[i];
      let [prevX, prevY] = path[i - 1];
      let xDiff = Math.abs(x - prevX);
      let yDiff = Math.abs(y - prevY);
      expect([1, 2]).toContain(xDiff);
      expect([1, 2]).toContain(yDiff);
      expect(xDiff).not.toEqual(yDiff);
    }
  }

  for (let i = 0; i < 100; i++) {
    let pointA = randomBoardCoords();
    let pointB = randomBoardCoords();
    let forward = knightMoves(pointA, pointB);
    let backward = knightMoves(pointB, pointA);
    expect(forward).toBeTruthy();
    expect(backward).toBeTruthy();
    expect(forward.length).toEqual(backward.length);
    auditPath(forward);
    auditPath(backward);
  }
});



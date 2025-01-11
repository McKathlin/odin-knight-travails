import knightMoves from './knight.js';

function logMoves(start, end) {
  const path = knightMoves(start, end);
  console.log(`Knight moves from ${start} to ${end}:`);
  for (const position of path) {
    console.log("    " + position);
  }
  console.log(`${path.length - 1} moves`);
}

logMoves([1,1], [6,5]);
console.log('');
logMoves([7,7], [0,0]);
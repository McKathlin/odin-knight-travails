# Knight Travails

This module holds a `knightMoves(src, dest)` function and its tests and dependencies. It was made as part of The Odin Project curriculum.

## Overview of files

* **knight.js**: This module script exports a function that finds a chess knight's shortest path from one pair of board coordinates to another.
* **main.js**: This script tests queue.js and knight.js and depends on test.js
* **package.json**: NPM information for this module.
* **queue.js**: This module script exports a simple Queue class implemented as a singly-linked list.
* **test.js**: This module script exports a bundle of functions that help with testing.

## The `knightMoves` function

The file knight.js exports a function that is called `knightMoves` in main.js.
This function takes two parameters, both of which are board coordinate pairs expressed as an array.
Since these coordinates are zero-indexed and an eight-by-eight chess board is assumed,
each coordinate must be an integer in the range 0 through 7.
The first parameter is the starting point, and the second parameter is the destination.

The function's output is an array of coordinates representing the path from the starting point to the destination.
The starting point itself is included at the beginning of the path, and the destination, at the end of the path.
For example, calling `knightMoves([6, 6], [5, 7])` will return `[[6, 6], [4, 5], [5, 7]]`

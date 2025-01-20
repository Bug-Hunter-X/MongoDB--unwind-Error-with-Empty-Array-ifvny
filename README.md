# MongoDB $unwind Error with Empty Array

This repository demonstrates a common error encountered when using the `$unwind` operator in MongoDB aggregation pipelines. The `$unwind` operator is used to deconstruct an array field from the input documents to output a document for each element.  However, if the array field is empty, `$unwind` will throw an error.

The `bug.js` file contains code that will reproduce this error. The `bugSolution.js` file shows how to correctly handle this scenario using `$lookup` and `$unwind` safely.

## Reproduction

1. Ensure you have a MongoDB instance running and populated with relevant collections.
2. Run `bug.js`. You'll receive an error stating something like: `error: `$unwind failed: error processing unwind stage: argument must be an array.`

## Solution

The solution is to use a conditional operator to check if the array is empty before unwinding.  This prevents the error by skipping the `$unwind` stage when the array is empty.  The `bugSolution.js` file showcases this technique.
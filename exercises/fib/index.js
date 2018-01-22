// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3
const now = require('performance-now');

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

function fib(n) {
  // recursive solution
  // Awful.. n^2 run time - memoize/cache calls for better performance

  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);

  // more concise - iterative -- linear run time
  // const result = [0, 1];
  // for (let i = 1; i < n; i++) {
  //   const a = result[i];
  //   const b = result[i - 1];
  //   result.push(a + b);
  // }
  // return result[n];

  //initial way to do it
  // let a = 0;
  // let b = 1;
  // let count = 0;

  // while (count < n) {
  //   let tmp = b;
  //   b = a + b;
  //   a = tmp;

  //   count++;
  // }
  // console.log(a, b);
  // return a;
}

fib = memoize(fib);
const t0 = now();
console.log(fib(1000));
const t1 = now();
console.log(`Fib took ${t1 - t0}ms to run `);
module.exports = fib;

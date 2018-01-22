const now = require('performance-now');

function sort(arr) {
  let sorting = true;

  while (sorting) {
    let sorts = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        let tmp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmp;
        sorts++;
      }
    }
    if (sorts === 0) {
      sorting = false;
    }
  }
}

const start = now();
sort(arr);
const end = now();
console.log(arr);
console.log(`took ${end - start}ms`);

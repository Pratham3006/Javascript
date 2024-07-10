const arr = [1, 2, 3, 4, 5, 6];
const start = 0;
const end = arr.length - 1;
const mid = Math.floor((start + end) / 2);

const first = arr.slice(0, mid + 1);
const second = arr.slice(mid + 1);
const third = first.concat(second);

console.log(third); // Outputs: [1, 2, 3, 4, 5, 6]

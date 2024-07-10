const a = ["test", "Apple", "man"];
let max = 0; // Initialize max to a very small number

// Find the maximum length in the array
for (let i = 0; i < a.length; i++) {
    max = Math.max(max, a[i].length);
}

// Filter elements longer than max length
const m = a.filter((item) => item.length === max);

console.log(m); // Outputs ["Apple"]

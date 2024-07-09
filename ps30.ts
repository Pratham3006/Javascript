let a2 = "Pratham";
let count = (a2.match(/[aeiouAEIOU]/g) || []).length;

console.log(count); // Output: 2

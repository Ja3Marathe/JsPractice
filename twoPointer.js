// const array = [1, 2, 3, 4, 5, 6];

// const result = [];

// for (let i = 0, j = array.length - 1; i < array.length / 2; i++, j--) {
//     const pair = [array[i], array[j]];
//     result.push(pair);
// }
// console.log(result);

// console.log("====");

// const whiteResult = [];
// let start = 0;
// let end = array.length - 1;
// while (start < end) {
//     whiteResult.push([array[start], array[end]]);
//     start++;
//     end--;
// }
// console.log(whiteResult);

const array = [1, 2, 3, 4, 5, 6];
const result = [];
// for (let i = 0, j = array.length - 1; i < array.length / 2; i++, j--) {
//     const pairs = [array[i], array[j]];
//     result.push(pairs)
// }
// console.log(result);

let i = 0;
let j = array.length - 1;
while (i < j) {
    const pair = [array[i], array[j]];
    result.push(pair);
    i++;
    j--;
}
console.log(result);
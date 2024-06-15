// const array = [23, 34, 31, 1, 47, 49, 2]
// let small = array[0]
// for (let i = 0, j = array.length - 1; i <= j; i++, j--) {
//     if (array[i] < small) {
//         small = array[i]
//     }
//     if (array[j] < small) {
//         small = array[j]
//     }
//     console.log(`Iteration ${i}`)
// }
// console.log(`Smallest Number is ${small}`)


// let x = 0
// let y = array.length - 1
// while (x < y) {
//     if (array[x] < small) {
//         small = array[x];
//     }
//     if (array[y] < small) {
//         small = array[y];
//     }
//     x++;
//     y--;
// }
// console.log("===" + small)



const array = [12, 23, 5, 1, 84, 39, 50];
let small = array[0];
// for (let i = 0, j = array.length - 1; i <= j; i++, j--) {
//     if (array[i] < small) {
//         small = array[i];
//     }
//     if (array[j] < small) {
//         small = array[j];
//     }
// }

let i = 0;
let j = array.length - 1;
while (i <= j) {
    if (array[i] < small) {
        small = array[i];
    }
    if (array[j] < small) {
        small = array[j];
    }
    i++;
    j--;
}
console.log(small);


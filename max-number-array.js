// const array = [23, 35, 21, 7, 44, 87];
// let max = array[0];

// for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//         max = array[i];
//     }
// }
// console.log(max)


// const array = [10, 5, 24, 35, 22, 14];
// let max = array[0]
// let i = 1;
// let j = array.length - 1;

// while (i <= j) {
//     if (array[i] > max) {
//         max = array[i];
//     }
//     if (array[j] > max) {
//         max = array[j];
//     }
//     i++;
//     j--;
// }
// console.log(max);


const array = [21, 32, 12, 43, 4, 7, 1]
let max = array[0]
let i = 0;
let j = array.length - 1;
while (i <= j) {
    if (array[i] > max) {
        max = array[i];
    }
    if (array[j] > max) {
        max = array[j];
    }
    i++;
    j--;
}
console.log(max);
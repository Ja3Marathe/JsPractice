// const array = [10, 23, 54, 5, 25, 78];
// let start = 0;
// let end = array.length - 1;

// while (start < end) {
//     let temp = array[start];
//     array[start] = array[end];
//     array[end] = temp;
//     start++;
//     end--;
// }
// console.log(array)
const array = [20, 10, 23, 54, 25, 78];
let start = 0;
let end = array.length - 1;
while (start < end) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
}
console.log(array);
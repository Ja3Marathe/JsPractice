// const array = [12, 23, 34, 54, 12, 98, 98];
// let array2 = [];
// for (let i = 0; i < array.length; i++) {
//     let found = true;
//     for (let j = i + 1; j < array.length; j++) {
//         if (array[i] === array[j]) {
//             found = false;
//             break;
//         }
//     }
//     if (found) {
//         array2.push(array[i])
//     }
// }
// console.log(array2);

const array = [21, 32, 21, 43, 65, 43, 32];
const same = [];
for (let i = 0; i < array.length; i++) {
    let check = false;
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
            check = true;
            break;
        }
    }
    if (!check) {
        same.push(array[i]);
    }
}
console.log(same);
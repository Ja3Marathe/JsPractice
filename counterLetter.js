// const myName = "YASH ARUN PATIL YY R";
// const counter = {};
// let max = 0;
// let maxValue = "";
// for (let i = 0; i < myName.length; i++) {
//     const letter = myName[i];
//     if (letter === " ") {
//         continue;
//     }
//     if (counter[letter]) {
//         const maxChar = counter[letter] + 1;
//         counter[letter] = maxChar;
//         if (maxChar > max) {
//             max = maxChar;
//             maxValue = letter;
//         }
//     }
//     else {
//         counter[letter] = 1;
//     }
// }
// console.log(counter);
// console.log(max);
// console.log(maxValue);

// const keys = Object.keys(counter);
// for (let i = 0; i < keys.length; i++) {
//     if (counter[keys[i]] === max) {
//         console.log("Correct Value is : ", keys[i]);
//         break;
//     }
// }




// const myName = "My Name is Jatin yy"
// const counter = {};
// let max = 0;
// let maxValue = "";
// for (let i = 0; i < myName.length; i++) {
//     const letter = myName[i];
//     if (letter === " ") {
//         continue;
//     }
//     if (counter[letter]) {
//         const maxChar = counter[letter] + 1;
//         counter[letter] = maxChar;
//         if (maxChar > max) {
//             max = maxChar;
//             maxValue = letter;
//         }
//     }
//     else {
//         counter[letter] = 1;
//     }
// }
// console.log(counter);
// console.log(max);
// console.log(maxValue);


const string = "My Name is Jatin"
const counter = {};
let max = 0;
let maxValue = "";

for (let i = 0; i < string.length - 1; i++) {
    const letter = string[i];
    if (letter === " ") {
        continue;
    }
    if (counter[letter]) {
        const maxChar = counter[letter] + 1;
        counter[letter] = maxChar;
        if (maxChar > max) {
            max = maxChar;
            maxValue = letter;
        }
    }
    else {
        counter[letter] = 1;
    }
}
console.log(max);
console.log(counter);
console.log(maxValue);

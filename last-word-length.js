// const string = "My Name is Jatin";
// let lastWord = ""
// for (let i = string.length - 1; i >= 0; i--) {
//     if (string[i] !== " ") {
//         lastWord = string[i] + lastWord;
//     }
//     else {
//         break;
//     }
// }
// console.log(lastWord);

// const word = string.split(" ")
// console.log(word[word.length - 1])

const string = "My Name is Jatin";
let lastWord = "";
for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] !== " ") {
        lastWord = string[i] + lastWord;
    }
    else {
        break;
    }
}
console.log(lastWord);
const word = string.split(" ")
console.log(word[word.length - 1]);
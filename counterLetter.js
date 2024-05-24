const myName = "Jatin Marathe"
const counter = {}

for (let i = 0; i < myName.length; i++) {
    const letter = myName[i];

    if (letter === " ") {
        continue;
    }
    if (counter[letter]) {
        counter[letter] = counter[letter] + 1;


    }
    else {
        counter[letter] = 1;
    }
}
console.log(counter);

let maxValue = 0, maxChar = "";

for (let char in counter) {
    if (counter[char] > maxValue) {
        maxValue = counter[char];
        maxChar = char;
    }
}

console.log(maxChar);
console.log(maxValue);





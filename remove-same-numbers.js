const array = [12, 23, 34, 54, 12, 98, 54]
let array2 = []

let i = 0;

while (i < array.length) {
    let temp = 0;
    let j = 0
    j = i + 1
    while (j < array.length) {
        if (array[i] === array[j]) {
            array2.push(array[i])
            break;
        }
        else {
            j++;
            array2.push(array[i])
        }
    }
    i++;
}
console.log(array2);
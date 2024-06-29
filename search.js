const array = [12, 10, 43, 18, 4]

const search = (num) => {
    let found = false
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === num) {
            found = true;
            break;
        }
    }
    return found
}

console.log(search(10));
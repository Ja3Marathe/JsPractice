const arr = [1, 2, 3, 4, 5];
let newArr = [];

arr.forEach((item) => {
    if (item !== 4) {
        newArr.push(item);
    }
})

console.log(newArr);
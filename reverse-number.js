const reverseNumber = (number) => {
    let rem, sum = 0;
    while (number > 0) {
        rem = number % 10;
        sum = sum * 10 + rem;
        number = Math.floor(number / 10);
    }
    return sum;
}
const number = 12345;
console.log(reverseNumber(number));

const easyReverse = (number) => {
    console.log(number.toString().split("").reverse().join(""));
}

easyReverse(number)
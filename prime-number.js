const num = 9;
let flag = true;

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        flag = false;
        console.log(`The Number is not prime ,it is divisible by ${i}`);
        break;
    }
}
if (flag) {
    console.log("Number is Prime");
}
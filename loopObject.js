person = [
    fname = "Jatin",
    age = 20,
    city = "Parola"
]

const keys = Object.keys(person);
console.log(keys);
keys.forEach((key) => {
    console.log(person[key]);
})

console.log("============")

const values = Object.values(person);
console.log(values);
values.forEach((value) => {
    console.log(value);
})

console.log("============")

const keyValues = Object.entries(person);
console.log(keyValues);
keyValues.forEach((keyValue) => {
    console.log(keyValue[1]);
})

console.log("============")

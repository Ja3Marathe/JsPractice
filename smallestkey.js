// const object = {
//     x: 6,
//     y: 10,
//     z: 1,
// };

// const keys = Object.keys(object)
// let small
// let _key
// for (let i = 0; i < keys.length; i++) {
//     const key = keys[i];
//     if (!small) {
//         small = object[key];
//     }
//     else if (object[key] < small) {
//         console.log(object[key]);
//         small = object[key];
//         _key = key;
//     }
// }
// console.log(`The Smallest Key is ${_key} and smallest value is ${small}`);

const object = {
    x: 6,
    y: 10,
    z: 1,
};

const keys = Object.keys(object);
let small;
let _key;

for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (!small) {
        small = object[key];
    }
    else if (object[key] < small) {
        small = object[key];
        _key = key;
    }
}

console.log(`Small key ${_key} small number ${small}`)
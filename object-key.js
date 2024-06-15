// const object = {
//     x: 7,
//     y: 3,
//     z: 1,
//     0: 10,
//     sayhi: () => ("Hii"),
// }
// console.log(object.x);
// console.log(object.y);
// console.log(object['z']);


// const printObjectKey = (key) => {
//     if (object[key]) {
//         if (typeof object[key] === 'function') {
//             console.log(object[key]())
//         }
//         else {
//             console.log(object[key])
//         }
//     }
//     else {
//         console.log(`${key} does not exit`);
//     }
// }
// printObjectKey("sayhi")

const object = {
    x: 4,
    y: 2,
    0: 10,
    sayhii: () => ("hii")
};

const printObject = (key) => {
    if (object[key]) {
        if (typeof object[key] === 'function') {
            console.log(object[key]());
        }
        else {
            console.log(object[key]);
        }
    }
    else {
        console.log(`${key} does not exits`);
    }
}

printObject('sayhii')
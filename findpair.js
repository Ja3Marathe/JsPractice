// const findpairs = ({ array, sum }) => {

//     const result = [];
//     for (let i = 0; i < array.length - 1; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] + array[j] === sum) {
//                 result.push([array[i], array[j]]);
//                 break;
//             }
//         }
//     }
//     console.log(result);
// };

// findpairs({ sum: 6, array: [1, 2, 3, 4, 5, 6] });

// const findPairsOptimized = ({ array, sum }) => {
//     array.sort();
//     const result = [];
//     console.log(array);
//     let i = 0;
//     let j = array.length - 1;

//     while (i < j) {
//         if (array[i] + array[j] === 6) {
//             result.push([array[i], array[j]]);
//             i++;
//             j++;
//         }
//         else if (array[i] + array[j] > sum) {
//             j--;
//         }
//         else if (array[i] + array[j] < sum) {
//             i++;
//         }
//     }
//     console.log(result);
// }
// findPairsOptimized({ sum: 6, array: [3, 2, 0, 4, 5] });


const findPairsOptimized = ({ array, sum }) => {

    array.sort();
    const result = [];
    console.log(array);
    let i = 0;
    let j = array.length - 1;

    while (i < j) {
        if (array[i] + array[j] === sum) {
            result.push([array[i], array[j]]);
            i++;
            j--;
        }
        else if (array[i] + array[j] > sum) {
            j--;
        }
        else if (array[i] + array[j] < sum) {
            i++;
        }
        console.log(result);
    }
}
findPairsOptimized({ sum: 6, array: [2, 3, 0, 4, 3] });
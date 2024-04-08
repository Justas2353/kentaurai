

function recursion(n) {
    console.log('IN recursion n:', n);
    if (n != 3) {
        recursion(n + 1);
    }
    console.log('END recursion n:', n);
}


recursion(1);



multiArray = [
    [1, [4, 5, 6], 3],
    [[4, [7, 8, [4, [4, 5], 6]]], 5, 6],
    [7, 8, [4, [4, 5], 6]]
];

// console.log(multiArray);

console.clear();


function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            printArray(arr[i]);
        } else {
            console.log(arr[i]);
        }
    }
}

printArray(multiArray);

console.clear();



const digitsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = 0;

digitsArray.forEach(item => sum += item);

console.log('sum:', sum);



const sum2 = digitsArray.reduce((acc, item) => acc + item, 0);

console.log('sum2:', sum2);
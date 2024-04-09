

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


// ka daro: skaciuoja (nieko)
// ka grazina akumaliatoriaus reiksme 

const sum2 = digitsArray.reduce((acc, item) => acc + item, 0);

console.log('sum2:', sum2);

console.clear();



// reverse
// ka daro: apvercia masyva
// ka grazina: ta pati pversta masyva

const colors = ['red', 'green', 'blue', 'green', 'black'];

colors.reverse();

console.log('colors:', colors);



// toReversed
// ka daro: nieko
// ka grazina: nauja masyva su apversta tvarka

const animals = ['cat', 'dog', 'fish', 'bird', 'elephant'];

const animalsRev = animals.toReversed();

console.log('animals:', animals);
console.log('animalsRev:', animalsRev);




//sort
//ka daro: surikiuoja masyva
//ka grazina: ta pati masyva surikiuota

const numbers = [1, 5, 7, 3, 9, 2, 4, 6, 8];

numbers.sort((a, b) => a - b);

console.log('numbers:', numbers);



// toSorted
// ka daro: nieko
// ka grazina: surikiuota masyva

const numbers2 = [1, 3, 7, 5, 9, 4, 6, 8];

const sortedNumbers = numbers2.toSorted();

console.log('numbers2:', numbers2);
console.log('sortedNumbers:', sortedNumbers);



// find 
// ka daro: nieko
// ka grzina: iesko pirmo elemento, kuris tenkina salyga arba undefined

const names = ['jonas', 'petras', 'antanas', 'juozas', 'ona'];

const foundName = names.find(name => name[0] == 'j');

console.log('foundName:', foundName);



// some
// ka daro: nieko
// ka grazina: true/false ar bent vienas elementas tenkina salyga

const hasOna = names.some(name => name == 'ieva');

console.log('hasOna:', hasOna);

console.clear();


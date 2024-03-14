function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let one = rand(0, 4);  
let two = rand(0, 4);

console.log(one, two);

let result;

if (one > two) {
    result = one / two;
} else {
    result = two / one;
}

console.log(result);


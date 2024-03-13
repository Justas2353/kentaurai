console.log('Hello World')
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let one = rand(0, 4);   // UZDUOTIS 1 JS
let two = rand(0, 4);

console.log(one, two);

let result;

if (one > two) {
    result = one / two;
} else {
    result = two / one;
}

console.log(result);      // UZDUOTIS 1 JS uzsidaro

console.clear();                                   // CLEAR

console.log(one, two);

if(one == 0 || two == 0) {
    result = 'Cannot divide by zero';
} else if (one > two) {
    result = one / two;
} else {
    result = two / one;
}

console.log(result);

console.clear();                                // CLEAR

console.log(Math.round(45.78));

console.log(Math.floor(45.9));

console.log(Math.ceil(45.22));

console.log(Math.min(45, 3, 4, 5, -7, 8, 9, 2, 1));

console.log(Math.max(45, 67, 4, 5, -7, 8, 9, 2, 1));

console.log(Math.abs(-45));

console.log(Math.random());

console.clear();                                 // CLEAR

let str = 'Barsukas';

console.log(str.length);

console.log(str[0] + str[1]);

let fairytail = 'Once upon a time, in a faraway forest...';

console.log(fairytail.includes('upon'));

console.log(fairytail.indexOf('upon'));

let shortString = 'abckkk';

console.log(shortString.padEnd(1111, '*'));


console.clear();                       // CLEAR

let shortFairytail = fairytail.slice(1, 10);

console.log(shortFairytail);

let lowerCaseFairytail = fairytail.toUpperCase();

console.log (lowerCaseFairytail);

console.clear();                       // CLEAR

let v;

if (5 > 8) {
    v = 'Jo';
} else {
    v = 'Ne';
}

console.log(v);

let vv = (5 > 8) ? 'Jo' : 'Ne';  // Naudojomas vietoi IF ELSE (optional)

console.log(vv);



let A = 0;
let aRez;

if (A > 0) {
    aRez = 'Tegiamas';
} else if (A < 0) {
    aRez = 'Neigiamas';
} else {
    aRez = 'Nulis';
}

console.log(aRez);
 
let aRez2 = (A > 0) ? 'Teigiamas' : (A < 0) ? 'Neigiamas' : 'Nulis';
 
console.log(aRez2);

let z1 = 5;
let z2 = 8;

let zasys = z1 + ' Zasis su ' + z2 + ' Zasiais';

console.log(zasys);

let zasys2 = `${z1} Žąsys su ${z2} žąsiais`;

console.log(zasys2);


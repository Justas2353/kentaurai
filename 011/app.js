console.log('WELCOME TO THE CYCLE WORLD!')
console.log('Hello World')
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 1; i < 5; i++) {
    console.log(i);
}

console.clear();


let word = 'Hello Mr. Racoon!';

for (let i = 0; i < word.length; i=i+2) {     //i=i+2 rodo kas antra elementa
    console.log(word[i] + (word[i+1] !== undefined ? word[i+1] : ''));         // (word[i] + word[i+1]) atspausdina po du elementus vienoi eilutei
}


//reverse

console.clear();

for (let i = word.length - 1; i >= 0; i--) {
    console.log(word[i]);
}

console.clear();

let m;

do {

    m = rand(0, 1) ? 'H' : 'S';
    console.log(m);

} while (m == 'S');

console.clear()

///


// let r;

// r = rand(20, 300);

// console.log(r, 'gimtadienis!');

// while (r < 200) {
//     r = r + rand(20, 50);
//     console.log(r);
// }




// atspausdinti 10 random reiksmiu nuo 0 iki 25

for (i = 0; i < 10; i++) {
    console.log(rand(0, 25));
}

console.log('Labas, mano mylimi uzdaviniai!');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// 1 padaryti masyvą iš skaičių nuo 1 iki 100

const numbers = [];

for (let i = 0; i < 100; i++) {
    numbers.push(i + 1);
}


// 2 Skaičius kurie dalinasi iš 3 pakeiskite į raidę "C"

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
        numbers[i] = 'C';
    }
}


// 3 Skaičius kurie dalinasi iš 7 pakeiskite į raidę "B"

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 7 === 0) {
        numbers[i] = 'B'
    }
}


// 4 Padauginti visus skaičius iš 5

for (let i = 0; i < numbers.length; i++) {
    if ('number' === typeof(numbers[i])) {    //IGNORUOJA RAIDES /TIKRINI TIPA
        numbers[i] = numbers[i] * 5;
    }
}

// 5 Pakeisti raides į jų indeksus

for (let i = 0; i < numbers.length; i++) {
    if (typeof(numbers[i]) === 'string') {        //IGNORUOJA SKACIUS/ TIKRINI TIPA
        numbers[i] = i;
    }
}


// 6 Skaičius kurie dalijasi iš 3 bet nesidalina iš 5 pakeisti į "A"

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 == 0 && numbers[i] % 5 != 0) {
        numbers[i] = 'A'
    }
}

// Suskaičiuoti skaičių sumą

let suma = 0;

for (let i = 0; i < numbers.length; i++) {
    if (typeof(numbers[i]) == 'number') {
        suma += numbers[i];
    }
}

console.log('suma:', suma);


console.log(numbers);


let A = numbers.indexOf('A');
let B = numbers.indexOf('B');

const rev = numbers.reverse()

console.log('A:', A);
console.log('B:', B);

console.log(rev);
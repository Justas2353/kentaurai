console.log('Labas, mano mylimi uzdaviniai!');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1. Naudojant ciklą atspausdinti skaičius nuo 1 iki 100
console.log('--------1--------')

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

console.clear();

// 2. Atspausdinti skaičius nuo 100 iki 1
console.log('--------2--------')

for (let i = 100; i >= 1; i--) {
    console.log(i);
}

console.clear();

// 3. Atspausdinti lyginius skaičius nuo 0 iki 100
console.log('--------3--------')

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.clear();


// 4. Naudojant ciklą padarykite sekaičių iš 9 vienetų ir prie to skaičiaus pridėkite 3
console.log('--------4--------')

let number = '';
for (let i = 0; i < 9; i++) {
    number += '1';
}
number = +number;
console.log(number + 3);

console.clear();

// 5. Atspausdinti skaičius nuo 1 iki 100, bet jeigu skaičius dalinasi iš 3, atspausdinti 'Fizz' vietoje skaičiaus.
console.log('--------5--------')

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
}

console.clear();

// 6. Naudojant ciklą paskaičiuoti visų skaičių nuo 1 iki 100 sumą
console.log('--------6--------')

let sum = 0;
for (let i = 1; i <= 200; i++) {
    sum += i;
}

console.log(sum);

console.clear()

// 7. Naudojant ciklą paskaičiuoti visų nelyginių skaičių nuo 1 iki 100 sumą
console.log('--------7--------')

let sum2 = 0;
for (let i = 1; i <= 100; i++) {
    sum2 += i % 2 ? i : 0;
}

console.log(sum2);
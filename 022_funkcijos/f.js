console.log('Have fun with functons again!');

const animals = ['cat', 'dog', 'elephant', 'horse', 'rabbit'];
// 1. Parašyti funkciją, kuris suskaičiuoja kiek elementų yra masyve
console.log('-------------1-------------');


// function countElements(arr) {
//     return arr.length;
// }

const countElements = arr => arr.length;  // tas pats tik anonimine

const rez1 = countElements(animals);

console.log(rez1);



// 2. Parašyti funkciją, kuri priima masyvą ir grąžina pirmą elementą
console.log('-------------2-------------');


const firstElement = arr => arr[0];

const rez2 = firstElement(animals);

console.log(rez2);


// 3. Parašyti funkciją, kuri priima masyvą ir grąžina paskutinį elementą
console.log('-------------3-------------');


const lastElement = arr => arr[arr.length - 1];

const rez3 = lastElement(animals);

console.log(rez3);

// 4. Parašyti funkciją, kuri priima masyvą ir grąžina vidurinį elementą (elementų kiekis visada nelyginis skaičius)
console.log('-------------4-------------');


const middleElement = arr => arr[Math.floor(arr.length / 2)];

const rez4 = middleElement(animals);

console.log(rez4);


// 5. Parašyti funkciją, kuri priima stringą ir grąžina stringo ilgį
console.log('-------------5-------------');

const str = 'racoon';

const stringLength = str => str.length;

const rez5 = stringLength(str);

console.log(rez5);


// 6. Parašyti funkciją, kuri priima masyvą ir paskaičiuoja kiek raidžių yra visuose masyvo elementuose. Naudojant 5 užduoties funkciją.
console.log('-------------6-------------');

const countLetters = arr => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count += stringLength(arr[i]);
    }
    return count;
}

const rez6 = countLetters(animals);

console.log(rez6);

console.clear();



// DU NAUJI CIKLAI //// DU NAUJI CIKLAI //// DU NAUJI CIKLAI //

// for
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

console.clear();


//for of
for (const animal of animals) {
    console.log(animal)
}

console.clear();


// for in
for (const index of animals) {
    console.log(animals[index]);
}

console.clear();



const houses = {
    house1: 'red',
    house2: 'blue',
    house3: 'green'
};

for (const house in houses) {
    console.log(house, houses[house]);
}

console.clear();



const sum = (a, b) => a + b;
const diff = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

const niceCalck = (action, a, b) => {
    const r = action(a, b);
    console.log('%c' + r, 'color: skyblue; font-size: 20px; background-color: gray; padding: 10px; border-radius: 10px;');
}

niceCalck(mult, 5, 3);

console.clear();



// const print = (text, i) => console.log(i, text);

// animals.forEach(print);

animals.forEach((text, i) => console.log(i, text));      // VISADA NAUDOSIME (MASYVAI)

animals.forEach(text => console.log(text));


console.clear();





// 7. Atspausdinti pirmas gyvūnų raides naudojant forEach metodą
console.log('----------7----------')


animals.forEach(animal => console.log(animal[0]));


// 8. Suskaičiuoti raidžių kiekį visuose gyvūnuose naudojant forEach metodą
console.log('----------8----------')


let count = 0;

animals.forEach(animal => count += animal.length);

console.log(count);


// 9. Atspausdinti gyvūnus kurių ilgis yra daugiau nei 4 naudojant forEach metodą
console.log('----------9----------')

animals.forEach(animal => {
    if (animal.length > 4) {
        console.log(animal);
    }
});

// animals.forEach(animal => animal.length > 4 ? console.log(animal) : '');      KITOKS BUDAS :)
console.log('Labas, mano mylimi uzdaviniai!');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const o = {vardas: 'Jonas', amzius: '22', miestas: 'Vilnius'}  //OBEJKTAS

const a1 = ['Jonas', '22', 'Vilnius'];

console.log('o', o);
console.log('a1', a1);

const animals = ['Kiškis', 'Lapė', 'Barsukas', 'Vilkas', 'Laukinis katinas'];

// const peoples = [
//     {vardas: 'Jonas', amzius: 22, miestas: 'Vilnius'},
//     {vardas: 'Petras', amzius: 33, miestas: 'Kaunas'},
//     {vardas: 'Antanas', amzius: 44, miestas: 'Klaipėda'}
// ];


console.log(animals[1]);

// animals[5] = 'Lusis';
animals.push('Lusis');     // pats priskaiciuoja reikiama auksta ir nepalieka tusciu

animals[3] = 'Suo';

// animals[10] = 'Zuikis';

console.log(animals.length);    //masyvo ilgis

console.log(animals);


// Atspausdinti visus animals masyvo elementus

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

console.clear();
// Atspausti porinių indeksų animals masyvo elementus

for (let i = 0; i < animals.length; i = i + 2) {
    console.log(animals[i]);
}

console.clear();
// Atspausti gyvūnus, kurių pavadinimas ilgesnis nei 6 raidės iš animals masyvo

for (let i = 0; i < animals.length; i++) {
    if (animals[i].length > 6) {
        console.log(animals[i]);
    }
    // animals[i].length > 6 && console.log(animals[i]);
}

console.clear();
// Sukurti masyvą su 5 atsitiktiniais skaičiais nuo 1 iki 10

const numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(rand(1, 10));
}
console.log(numbers);

// suskaičiuoti penketukus numbers masyve

let penketukai = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 5) {
        penketukai++;
    }
}

console.log('penketukai:', penketukai);

console.clear();



animals.push('Zuikis');          //prideda i gala elementus

animals.unshift('Briedis');       //prideda i prieki

animals.unshift('Keleivinis lektuvas', 'Kregzde', 'Bebras');

animals.push('Lakstingala', 'Pelekas', 'Tigras');

animals.pop();               // Trina elementus
animals.pop();           // Trina elementus

animals.shift();           // Trina elementus


console.log(animals);


 rez = animals.splice(2, 3); // 2 is index, 1 is how many elements to remove

console.log(rez, 'splice');

console.log(animals);



rez = animals.splice(3, 1, 'Dog', 'Cat', 'Mouse');

console.log(rez, 'splice');

console.log(animals);


let dogIndex = animals.indexOf('Dog');  //suzinok Indexa pvz
animals.splice (dogIndex, 1);

console.log(animals);



animals = ['cat', 'dog', 'elephant', 'bee', 'ant', 'whale', 'lion', 'tiger', 'bear', 'snake', 'shark', 'penguin', 'parrot', 'pigeon', 'eagle', 'sparrow', 'owl', 'seagull', 'woodpecker', 'flamingo', 'peacock', 'swan', 'duck', 'goose', 'pelican', 'stork', 'crane', 'heron', 'robin', 'nightingale', 'crow', 'raven', 'magpie', 'chickadee'];

// forEach
// ka daro: perrenka masyvo elementus 
// ka grazina: nieko

animals.forEach(animal => console.log(animal));

console.clear();


// map
// ka daro: perrenka masyvo elementus
// ka grazina: nauja masyva su pakeistais elementais

const newAnimals = animals.map(animal => animal.toUpperCase());

console.log(newAnimals);



// 1. Sukurkite masyvą smallAnimals, kuriame visis didesni nei 5 raidės gyvūnai būtų pakeisti į "big".
console.log('----------1----------')

const smallAnimals = animals.map(animal => {
    if (animal.length > 5) {
        return 'big';
    }
    return animal;
});

console.log(smallAnimals);


// 2. Sukurti masyvą bigAnimals, kuriame visi gyvūnai su 3 raidėm yra prailginti 5 "*"
console.log('----------2----------')

const bigAnimals = animals.map(animal => {
    if (animal.length == 3) {
        return animal + '*****';
    }
    return animal;
})

console.log(bigAnimals);

console.clear();



// filter
// ka daro: perrenka masyvo elementus
// ka grazina: nauja masyva tik su tam tikrais elementais

const filteredAnimals = animals.filter(animal => true);

console.log(filteredAnimals);



// 3. Sukurkite masyvą animalsStartingWithS, kuriame būtų tik gyvūnai prasidedantys raide "s".
console.log('----------3----------')


const animalsStartingWithS = animals.filter(animal => animal[0] == 's');

console.log(animalsStartingWithS);




// 4. Sukurkite masyvą animalsWithoutTigers, kuriame nebutų gyvūno "tiger".
console.log('----------4----------')


const animalsWithoutTigers = animals.filter(animal => animal != 'tiger');

console.log(animalsWithoutTigers);

console.clear();


const withNumbers = animals.map((animal, i) => `${i + 1}. ${animal}`);

console.log(withNumbers);


console.clear();


const animalWithOddIndex = withNumbers.filter((animal, i) => i % 2 == 1);

console.log(withNumbers);
console.log(animalWithOddIndex);


console.clear();



// SORT
// KA DARO: SURIKIUOJA MASYVO ELEMENTUS
// KA GRAZINA: TA PATI SURIKIUOTA MASYVA

animals.sort((a, b) => {
    if (a > b) {
        return 1;  // nesukeist
    }
    if (a < b) {
        return -1; // sukeist
    }
    return 0;   // nieko nedaryt jei lygus
});

console.log(animals);



const digits = [1, 5, 7, 3, 9, 2, 4, 6, 8];

digits.sort((a, b) => a - b);    // TRUMPESNIS KODAS VIETOI IF NAUDOJAMO (NETINKA STRINGAM)

console.log(digits);

console.clear();



// 5. Išrūšiuokite masyvą animals pagal gyvulio ilgį - ilgiausi pradžioje
console.log('----------5----------')


animals.sort((a, b) => b.length - a.length);

console.log(animals);



// 6. Išrūšiuokite masyvą animals pagal abėcėlę, naudodami antrą žodžio raidę.
console.log('----------6----------')

animals.sort((a, b) => a[1].localeCompare(b[1]));

console.log(animals);
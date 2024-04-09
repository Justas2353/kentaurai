function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


console.log(' MASYVO UZDAVINIAI xD')



const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimantė', 'Justė'];
const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];


// 1. Prie masyvo bitGirls pradžios (ne galo!) pridėkite Nausėdą (po pridėjimo bitGirls turės 6 elementus).
console.log('-----------1-----------')

bitGirls.unshift('Nausėdą');

console.log(bitGirls);


// 2. Sukurkite naują masyvą bitCats Pagridu paimkite masyvą cats. Naujasis masyvas turėtų turėti elementus iš mažų, dviejų narių, masyviukų: pirmas narys katinuko vardas, antras - katinuko svoris - atsitiktinės tekstinės reikšmės - “storas” arba “normalus”.
console.log('-----------2-----------')

const bitCats = [];

for (let i = 0; i < cats.length; i++) {
    bitCats.push([cats[i], ['storas', 'normalus'][rand(0, 1)]]);
}

console.log(bitCats);




// 3. bitCats masyve suskaičiuokite kiek yra storų ir normalių katinukų.
console.log('-----------3-----------')

let storas = 0;
let normalus = 0;

for (let i = 0; i < bitCats.length; i++) {
    if (bitCats[i][1] == 'storas') {
        storas++;
    } else {
        normalus++;
    }
}

console.log(storas, normalus);